import { todoApi } from '@/api/todoApi';
import type { NewTaskData, Task, TasksResponse } from '@/interfaces/task.interface';

interface DeleteResponse {
  message: string;
}

export const getTasks = async () => {
  try {
    const { data } = await todoApi.get<TasksResponse>({ endpoint: `/tasks` });
    return data;
  } catch (e) {
    throw new Error('Error loading tasks');
  }
};

export const createTask = async ({ name, description }: NewTaskData) => {
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

export const toggleCompleteTask = async (task_id: string) => {
  try {
    const response = await todoApi.post<Task>({ endpoint: `/tasks/${task_id}/complete` });
    return response;
  } catch (e) {
    throw new Error('Error completing task');
  }
};

export const deleteTask = async (task_id: string) => {
  try {
    const response = await todoApi.delete<DeleteResponse>({ endpoint: `/tasks/${task_id}/delete` });
    return response;
  } catch (e) {
    throw new Error('Error deleting task');
  }
};

export const deleteCompletedTasks = async () => {
  try {
    const response = await todoApi.delete<DeleteResponse>({ endpoint: `/tasks/delete-completed` });
    return response;
  } catch (e) {
    throw new Error('Error deleting completed tasks');
  }
};
