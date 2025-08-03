import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onProjectSave }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const projectTitle = title.current.value;
    const projectDescription = description.current.value;
    const projectDueDate = dueDate.current.value;

    onProjectSave({ title: projectTitle, description: projectDescription, dueDate: projectDueDate, id: crypto.randomUUID() });
    // Validation logic.
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex item-center justify-end gap-4 my-4">
        <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button
          onClick={handleSave}
          className="bg-stone-800 text-stone-50 hover:bg-stone-950 ml-2 px-4 py-2 rounded">Save</button>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}