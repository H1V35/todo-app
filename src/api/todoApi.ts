import { NewTaskData } from '@/interfaces/task.interface';

const API_URL = 'http://localhost:5005/api';

interface Options {
  endpoint: string;
  taskData?: NewTaskData;
}

export const todoApi = {
  get: async <T>({ endpoint }: Options): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}`);
    return response.json();
  },

  post: async <T>({ endpoint, taskData }: Options): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    return response.json();
  },

  delete: async <T>({ endpoint }: Options): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};
