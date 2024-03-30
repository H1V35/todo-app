import { todoApi } from '@/api/todoApi';
import type { NewTaskData, Task, Tasks } from '@/interfaces/task.interface';

interface DeleteResponse {
  message: string;
}

export const getTasks = async (): Promise<Tasks> => {
  try {
    const response = await todoApi.get<Tasks>({ endpoint: `/tasks` });
    return response;
  } catch (e) {
    throw new Error('Error loading tasks');
  }
};

export const createTask = async ({ name, description }: NewTaskData): Promise<Task> => {
  try {
    const response = await todoApi.post<Task>({
      endpoint: `/tasks`,
      taskData: { name, description },
    });
    return response;
  } catch (e) {
    throw new Error('Error creating task');
  }
};

export const completeTask = async (task_id: string): Promise<Task> => {
  try {
    const response = await todoApi.post<Task>({ endpoint: `/tasks/${task_id}/complete` });
    return response;
  } catch (e) {
    throw new Error('Error completing task');
  }
};

export const deleteTask = async (task_id: string): Promise<DeleteResponse> => {
  try {
    const response = await todoApi.delete<DeleteResponse>({ endpoint: `/tasks/${task_id}/delete` });
    return response;
  } catch (e) {
    throw new Error('Error deleting task');
  }
};

export const deleteCompletedTasks = async (): Promise<DeleteResponse> => {
  try {
    const response = await todoApi.delete<DeleteResponse>({ endpoint: `/tasks/delete-completed` });
    return response;
  } catch (e) {
    throw new Error('Error deleting completed tasks');
  }
};
