import React from 'react';
import { createTask } from '@/api/actions';

interface TaskFormProps {
  updateTasks: () => void;
}

export function TaskForm({ updateTasks }: TaskFormProps) {
  const [task, setTask] = React.useState({
    name: '',
    description: '',
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!task.name?.trim()) return;

    const newTask = {
      ...task,
    };

    await createTask(newTask);
    updateTasks();
    setTask({ name: '', description: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setTask({ ...task, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={task.name}
        onChange={handleInputChange}
        name="name"
        placeholder="Add a task"
        required
        className="h-12 px-4 text-xl bg-inherit border-2 border-zinc-600 rounded-lg outline-none transition-all duration-200 focus:border-sky-600 focus:scale-[1.01]"
      />

      <input
        type="text"
        value={task.description}
        onChange={handleInputChange}
        name="description"
        placeholder="Add a description"
        className="h-12 px-4 text-xl bg-inherit border-2 border-zinc-600 rounded-lg outline-none transition-all duration-200 focus:border-sky-600 focus:scale-[1.01]"
      />

      <button className="h-12 text-zinc-100 text-3xl bg-zinc-800 border-2 border-zinc-800 rounded-lg transition-all duration-300 hover:bg-zinc-700">
        Add
      </button>
    </form>
  );
}
