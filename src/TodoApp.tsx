import { TaskForm } from '@/components/TaskForm';
import { TasksList } from '@/components/TasksList';

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

            <section className="max-h-[50vh] py-2 overflow-y-auto overflow-x-hidden">
              <TasksList />
            </section>
          </div>

          <footer className="h-10 flex items-center justify-between">
            <p className="tasks-remaining">0 tasks remaining</p>

            <button className="py-2 px-4 bg-inherit border-2 border-zinc-600 rounded-lg transition-all duration-300 hover:bg-sky-300 hover:text-sky-700 hover:border-sky-700">
              Clear Completed
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}
