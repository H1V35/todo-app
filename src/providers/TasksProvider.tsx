import React from 'react';
import {
  getTasks,
  createTask,
  toggleCompleteTask,
  deleteTask,
  deleteCompletedTasks,
} from '@/api/actions';
import type { NewTaskData, Task } from '@/interfaces/task.interface';

type TasksProviderProps = {
  children: React.ReactNode;
};

type TasksContextType = {
  tasks: Task[];
  isLoading: boolean;
  updateTasks: () => void;
  addTask: (newTask: NewTaskData) => void;
  handleToggleCompleteTask: (task: Task) => void;
  handleDeleteTask: (task: Task) => void;
  handleDeleteCompletedTasks: () => void;
};

const defaultTasksContextValue: TasksContextType = {
  tasks: [],
  isLoading: false,
  updateTasks: () => {},
  addTask: () => {},
  handleToggleCompleteTask: () => {},
  handleDeleteTask: () => {},
  handleDeleteCompletedTasks: () => {},
};

export const TasksContext = React.createContext<TasksContextType>(defaultTasksContextValue);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const updateTasks = React.useCallback(async () => {
    await getTasks().then(setTasks);
  }, []);

  const addTask = React.useCallback(
    async (newTask: NewTaskData) => {
      await createTask(newTask);
      updateTasks();
    },
    [updateTasks]
  );

  const handleToggleCompleteTask = React.useCallback(
    async (task: Task) => {
      await toggleCompleteTask(task._id);
      updateTasks();
    },
    [updateTasks]
  );

  const handleDeleteTask = React.useCallback(
    async (task: Task) => {
      await deleteTask(task._id);
      updateTasks();
    },
    [updateTasks]
  );

  const handleDeleteCompletedTasks = React.useCallback(async () => {
    await deleteCompletedTasks();
    updateTasks();
  }, [updateTasks]);

  React.useEffect(() => {
    setIsLoading(true);
    updateTasks();
    setIsLoading(false);
  }, [updateTasks]);

  const contextValue = React.useMemo(
    () => ({
      tasks,
      isLoading,
      updateTasks,
      addTask,
      handleToggleCompleteTask,
      handleDeleteTask,
      handleDeleteCompletedTasks,
    }),
    [
      tasks,
      isLoading,
      updateTasks,
      addTask,
      handleToggleCompleteTask,
      handleDeleteTask,
      handleDeleteCompletedTasks,
    ]
  );

  return <TasksContext.Provider value={contextValue}>{children}</TasksContext.Provider>;
}
