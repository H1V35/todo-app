import React from 'react';
import {
  createTask,
  deleteCompletedTasks,
  deleteTask,
  getTasks,
  toggleCompleteTask,
} from '@/api/actions';
import type { NewTaskData, Task } from '@/interfaces/task.interface';

export function useTasks() {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const updateTasks = async () => {
    await getTasks().then(setTasks);
  };

  const addTask = async (newTask: NewTaskData) => {
    await createTask(newTask);
    updateTasks();
  };

  const handleToggleCompleteTask = async (task: Task) => {
    await toggleCompleteTask(task._id);
    updateTasks();
  };

  const handleDeleteTask = async (task: Task) => {
    await deleteTask(task._id);
    updateTasks();
  };

  const handleDeleteCompletedTasks = async () => {
    await deleteCompletedTasks();
    updateTasks();
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      updateTasks();
      setIsLoading(false);
    })();
  }, []);

  return {
    tasks,
    isLoading,
    addTask,
    handleToggleCompleteTask,
    handleDeleteTask,
    handleDeleteCompletedTasks,
  };
}
