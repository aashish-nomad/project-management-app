import NewTask from "./NewTask";

export default function Tasks({ tasks, onTaskAdd, onTaskDelete, selectedProjectId }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onTaskAdd={onTaskAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8">
          {tasks.map(task => {
            if (task.projectId == selectedProjectId) {
              return (
                <li key={task.taskId} className="flex justify-between my-4 p-4 rounded-md bg-stone-100">
                  <span>{task.text}</span>
                  <button onClick={() => onTaskDelete(task.taskId)} className="text-gray-600 hover:text-red-500">Clear</button>
                </li>
              );
            }
          })
          }
        </ul>
      )}
    </section >
  );
}
