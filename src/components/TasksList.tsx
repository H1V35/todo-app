import { TaskItem, TaskItemSkeleton } from '@/components/TaskItem';
import type { Task } from '@/interfaces/task.interface';

interface TasksList {
  tasks: Task[];
  isLoading: boolean;
  taskHandlers: {
    handleToggleCompleteTask: (task: Task) => void;
    handleDeleteTask: (task: Task) => void;
  };
}

export function TasksList({ tasks, isLoading, taskHandlers }: TasksList) {
  if (!tasks.length && isLoading) {
    return <TaskItemSkeleton loading />;
  }

  if (!tasks.length) {
    return <TaskItemSkeleton />;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} taskHandlers={taskHandlers} />
      ))}
    </>
  );
}
