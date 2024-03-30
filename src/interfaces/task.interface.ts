export interface Tasks {
  data: Task[];
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
