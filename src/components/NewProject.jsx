import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onProjectSave, onCancle }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const projectTitle = title.current.value;
    const projectDescription = description.current.value;
    const projectDueDate = dueDate.current.value;

    if (
      projectTitle.trim() === '' ||
      projectDescription.trim() === '' ||
      projectDueDate.trim() === ''
    ) {
      modal.current.open(); // Show error modal
      return; // Stop form submission
    }

    onProjectSave({ title: projectTitle, description: projectDescription, dueDate: projectDueDate, id: crypto.randomUUID() });
    // Validation logic.
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Oops, looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-4">
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancle}>Cancel</button>
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
    </>

  );
}