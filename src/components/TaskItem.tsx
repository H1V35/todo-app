import check from '@/assets/icons/check.svg';
import checked from '@/assets/icons/checked.svg';
import trashCan from '@/assets/icons/trash-can.svg';
import type { Task } from '@/interfaces/task.interface';
import { completeTask, deleteTask } from '../api/actions';

interface TaskItemProps {
  task: Task;
  updateTasks: () => void;
}

export function TaskItem({ task, updateTasks }: TaskItemProps) {
  const handleCompleteTask = async () => {
    await completeTask(task._id);
    updateTasks();
  };

  const handleDeleteTask = async () => {
    await deleteTask(task._id);
    updateTasks();
  };

  return (
    <li className="w-full px-2 sm:px-4 flex flex-col gap-2">
      <div className="flex justify-between items-center gap-8">
        <button
          onClick={handleCompleteTask}
          className="flex items-center gap-2 truncate transition-all duration-200 hover:scale-[1.03]"
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

        <button onClick={handleDeleteTask} className="flex-shrink-0">
          <img
            src={trashCan}
            alt="TrashCan Icon"
            className="w-8 transition-all duration-200 hover:scale-[1.06]"
          />
        </button>
      </div>

      <p className="px-12 text-zinc-500 break-words">{task.description}</p>
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

      <p className="px-12 text-zinc-500 break-words">Description</p>
    </li>
  );
}
