import { useTasksContext } from '@/hooks/useTasksContext';
import { TaskItem, TaskItemSkeleton } from '@/components/TaskItem';

export function TasksList() {
  const { tasks, isLoading } = useTasksContext();

  if (!tasks.length && isLoading) {
    return <TaskItemSkeleton loading />;
  }

  if (!tasks.length) {
    return <TaskItemSkeleton />;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </>
  );
}
