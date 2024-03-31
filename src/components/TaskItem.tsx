import { useTasksContext } from '@/hooks/useTasksContext';
import check from '@/assets/icons/check.svg';
import checked from '@/assets/icons/checked.svg';
import trashCan from '@/assets/icons/trash-can.svg';
import type { Task } from '@/interfaces/task.interface';

type TaskItemProps = {
  task: Task;
};

export function TaskItem({ task }: TaskItemProps) {
  const { handleToggleCompleteTask, handleDeleteTask } = useTasksContext();

  return (
    <li className="w-full px-2 sm:px-4 flex flex-col gap-2">
      <div className="flex justify-between items-center gap-8">
        <button
          onClick={() => handleToggleCompleteTask(task)}
          className={`flex items-center gap-2 truncate transition-all duration-200 hover:scale-[1.03] ${
            task.isCompleted ? 'opacity-40' : ''
          }`}
        >
          <img
            src={task.isCompleted ? checked : check}
            alt={task.isCompleted ? 'Checked Icon' : 'Check Icon'}
            className="w-8"
          />

          <span
            className={`text-xl truncate ${task.isCompleted ? 'line-through' : ''}`}
            title={task.name}
          >
            {task.name}
          </span>
        </button>

        <button onClick={() => handleDeleteTask(task)} className="flex-shrink-0">
          <img
            src={trashCan}
            alt="TrashCan Icon"
            className="w-8 transition-all duration-200 hover:scale-[1.06]"
          />
        </button>
      </div>

      <p
        className={`px-12 text-zinc-600 break-words ${
          task.isCompleted ? 'opacity-40 line-through' : ''
        }`}
      >
        {task.description}
      </p>
    </li>
  );
}

export function TaskItemSkeleton({ loading }: { loading?: boolean }) {
  return (
    <li
      className={`w-full px-2 sm:px-4 flex flex-col gap-2 ${
        loading ? 'animate-pulse' : 'opacity-30'
      }`}
    >
      <div className="flex justify-between items-center gap-8">
        <div className="flex items-center gap-2 truncate">
          <img src={checked} alt="Checked Icon" className="w-8" />
          <span className="text-xl truncate line-through" title="Task name">
            Task name
          </span>
        </div>

        <div className="flex-shrink-0">
          <img src={trashCan} alt="TrashCan Icon" className="w-8" />
        </div>
      </div>

      <p className="px-12 text-zinc-500 break-words line-through">Description</p>
    </li>
  );
}
