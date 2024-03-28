export function TasksRemaining() {
  return (
    <footer className="h-10 flex items-center justify-between">
      <p className="tasks-remaining">0 tasks remaining</p>

      <button className="py-2 px-4 bg-inherit border-2 border-zinc-600 rounded-lg transition-all duration-300 hover:bg-sky-300 hover:text-sky-700 hover:border-sky-700">
        Clear Completed
      </button>
    </footer>
  );
}
