import check from '@/assets/icons/check.svg';
import checked from '@/assets/icons/checked.svg';
import trashCan from '@/assets/icons/trash-can.svg';

export function TaskItem() {
  return (
    <li className="w-full px-2 sm:px-4 flex flex-col gap-2">
      <div className="flex justify-between items-center gap-8">
        <button className="flex items-center gap-2 truncate transition-all duration-200 hover:scale-[1.03]">
          <img src={check} alt="Check icon" className="w-8" />
          <span className="text-xl truncate" title="Task name">
            Task name
          </span>
        </button>

        <button className="flex-shrink-0">
          <img
            src={trashCan}
            alt="Trash can"
            className="w-8 transition-all duration-200 hover:scale-[1.06]"
          />
        </button>
      </div>

      <p className="px-12 text-zinc-500 break-words">Description</p>
    </li>
  );
}

type TaskItemSkeletonProps = {
  loading?: boolean;
};

export function TaskItemSkeleton({ loading }: TaskItemSkeletonProps) {
  return (
    <li
      className={`w-full px-2 sm:px-4 flex flex-col gap-2 ${
        loading ? 'animate-pulse' : 'opacity-30'
      }`}
    >
      <div className="flex justify-between items-center gap-8">
        <div className="flex items-center gap-2 truncate">
          <img src={checked} alt="Checked Icon" className="w-8" />
          <span className="text-xl line-through truncate" title="Task name">
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
