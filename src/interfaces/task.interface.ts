export interface TasksResponse {
  data: Task[];
}

export interface TaskResponse {
  data: Task;
  message: string;
}

export interface DeleteResponse {
  message: string;
}

export interface Task {
  _id: string;
  name: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface NewTaskData {
  name: string;
  description: string;
}
