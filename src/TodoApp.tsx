import { TaskForm } from '@/components/TaskForm';
import { TasksList } from '@/components/TasksList';
import { TasksRemaining } from '@/components/TasksRemaining';

export default function TodoApp() {
  return (
    <div className="h-screen w-screen max-w-[1280px] p-4 flex justify-center items-center">
      <div className="min-h-[50vh] max-h-full w-full max-w-[600px] bg-zinc-100 rounded-3xl flex flex-col">
        <main className="py-8 px-6 sm:px-10 flex-grow flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-6">
            <header className="my-2">
              <h1 className="text-4xl text-center">TODO App</h1>
            </header>

            <TaskForm />

            <TasksList />
          </div>

          <TasksRemaining />
        </main>
      </div>
    </div>
  );
}
