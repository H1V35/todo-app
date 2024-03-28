import { TaskItem, TaskItemSkeleton } from '@/components/TaskItem';

export function TasksList() {
  return (
    <ul className="flex flex-col gap-4">
      <TaskItemSkeleton />
    </ul>
  );
}
