import Button from "./Button";

export default function ProjectsSidebar({ onProjectCreate }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase text-stone-200 text-xl md:text-xl">Your Projects</h2>

      {/* Placeholder for project list (to be added later) */}

      <div>
        <Button onClick={onProjectCreate}>+ Add Project</Button>
      </div>
    </aside>
  );
}
