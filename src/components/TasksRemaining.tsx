import { deleteCompletedTasks } from '@/api/actions';
import type { Tasks } from '@/interfaces/task.interface';

interface TasksRemainingProps {
  tasks: Tasks | undefined;
  updateTasks: () => void;
}

export function TasksRemaining({ tasks, updateTasks }: TasksRemainingProps) {
  const incompletedTasks = tasks?.data.filter((task) => !task.isCompleted).length;
  const hasCompletedTasks = tasks?.data.some((task) => task.isCompleted);

  const handleDeleteCompletedTasks = async () => {
    await deleteCompletedTasks();
    updateTasks();
  };

  return (
    <footer className="h-12 flex items-center justify-between gap-4">
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
