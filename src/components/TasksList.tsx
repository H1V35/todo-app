import { TaskItem, TaskItemSkeleton } from '@/components/TaskItem';
import type { Task } from '@/interfaces/task.interface';

interface TasksList {
  tasks: Task[];
  isLoading: boolean;
  updateTasks: () => void;
}

export function TasksList({ tasks, isLoading, updateTasks }: TasksList) {
  if (!tasks.length && isLoading) {
    return <TaskItemSkeleton loading />;
  }

  if (!tasks.length) {
    return <TaskItemSkeleton />;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} updateTasks={updateTasks} />
      ))}
    </>
  );
}
