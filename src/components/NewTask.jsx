import { useState } from "react";

export default function NewTask({ onTaskAdd }) {

  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
    console.log(enteredTask);

  }

  function handleTaskAdd() {
    onTaskAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input type="text" value={enteredTask} onChange={handleChange}
        className="w-60 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleTaskAdd}>
        Add Task
      </button>
    </div>
  );
}
