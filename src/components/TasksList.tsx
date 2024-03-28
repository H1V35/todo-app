import { TaskItem, TaskItemSkeleton } from '@/components/TaskItem';

export function TasksList() {
  return (
    <section className="max-h-[50vh] py-2 overflow-y-auto overflow-x-hidden">
      <ul className="flex flex-col gap-4">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ul>
    </section>
  );
}
