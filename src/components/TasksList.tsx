import { TaskItem, TaskItemSkeleton } from '@/components/TaskItem';
import type { Task } from '@/interfaces/task.interface';

interface TasksList {
  tasks: Task[];
  isLoading: boolean;
  handleToggleCompleteTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
}

export function TasksList({
  tasks,
  isLoading,
  handleToggleCompleteTask,
  handleDeleteTask,
}: TasksList) {
  if (!tasks.length && isLoading) {
    return <TaskItemSkeleton loading />;
  }

  if (!tasks.length) {
    return <TaskItemSkeleton />;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          handleToggleCompleteTask={handleToggleCompleteTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </>
  );
}
