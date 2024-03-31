import { useTasksContext } from '@/hooks/useTasksContext';

export function TasksRemaining() {
  const { tasks, handleDeleteCompletedTasks } = useTasksContext();
  const incompletedTasks = tasks.filter((task) => !task.isCompleted).length;
  const hasCompletedTasks = tasks.some((task) => task.isCompleted);

  return (
    <footer className="h-12 ml-2 sm:ml-4 flex items-center justify-between gap-4">
      <p className="text-center">
        {incompletedTasks} task{incompletedTasks !== 1 && 's'} remaining
      </p>

      <button
        disabled={!hasCompletedTasks}
        onClick={handleDeleteCompletedTasks}
        className={`py-2 px-4 flex-shrink-0 bg-inherit border-2 border-zinc-600 rounded-lg transition-all duration-300 ${
          hasCompletedTasks
            ? 'animate-wiggle hover:bg-sky-300 hover:text-sky-700 hover:border-sky-700'
            : 'opacity-30'
        } `}
      >
        Clear Completed
      </button>
    </footer>
  );
}
