import { TaskItem, TaskItemSkeleton } from '@/components/TaskItem';
import type { Tasks } from '@/interfaces/task.interface';

interface TasksList {
  tasks: Tasks | undefined;
  isLoading: boolean;
  updateTasks: () => void;
}

export function TasksList({ tasks, isLoading, updateTasks }: TasksList) {
  if (isLoading) {
    return <TaskItemSkeleton loading />;
  }

  if (!tasks?.data.length) {
    return <TaskItemSkeleton />;
  }

  return (
    <>
      {tasks.data.map((task) => (
        <TaskItem key={task._id} task={task} updateTasks={updateTasks} />
      ))}
    </>
  );
}
