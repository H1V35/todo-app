import { todoApi } from '@/api/todoApi';
import type {
  DeleteResponse,
  NewTaskData,
  TaskResponse,
  TasksResponse,
} from '@/interfaces/task.interface';

export const getTasks = async () => {
  const { data, error } = await todoApi.get<TasksResponse>({ endpoint: `/tasks` });
  return { data, error };
};

export const createTask = async ({ name, description }: NewTaskData) => {
  const { data, error } = await todoApi.post<TaskResponse>({
    endpoint: `/tasks`,
    taskData: { name, description },
  });

  if (error) {
    window.alert(error);
  }

  return { data, error };
};

export const toggleCompleteTask = async (task_id: string) => {
  const { data, error } = await todoApi.post<TaskResponse>({
    endpoint: `/tasks/${task_id}/complete`,
  });
  return { data, error };
};

export const deleteTask = async (task_id: string) => {
  const response = await todoApi.delete<DeleteResponse>({ endpoint: `/tasks/${task_id}/delete` });
  return response;
};

export const deleteCompletedTasks = async () => {
  const response = await todoApi.delete<DeleteResponse>({ endpoint: `/tasks/delete-completed` });
  return response;
};
