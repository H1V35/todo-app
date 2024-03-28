export function TasksRemaining() {
  return (
    <footer className="flex items-center justify-between gap-4">
      <p className="w-1/2 text-center">0 tasks remaining</p>

      <button className="w-1/2 max-w-fit py-2 px-4 bg-inherit border-2 border-zinc-600 rounded-lg transition-all duration-300 hover:bg-sky-300 hover:text-sky-700 hover:border-sky-700">
        Clear Completed
      </button>
    </footer>
  );
}
