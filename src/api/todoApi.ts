import type { NewTaskData } from '@/interfaces/task.interface';

const API_URL = 'http://localhost:5005/api';

interface Options {
  endpoint: string;
  taskData?: NewTaskData;
}

export const todoApi = {
  get: async <T>({ endpoint }: Options): Promise<{ data: T | null; error: string | null }> => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`);

      if (!response.ok) {
        const { message } = await response.json();
        return { data: null, error: message };
      }

      const data = await response.json();
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  },

  post: async <T>({
    endpoint,
    taskData,
  }: Options): Promise<{ data: T | null; error: string | null }> => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        const { message } = await response.json();
        return { data: null, error: message };
      }

      const data = await response.json();
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.message };
    }
  },

  delete: async <T>({ endpoint }: Options): Promise<{ message: T | null }> => {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
      });

      const message = await response.json();
      return message;
    } catch (error: any) {
      return { message: error.message };
    }
  },
};
