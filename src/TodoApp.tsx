import { useTasks } from '@/hooks/useTasks';
import { TaskForm } from '@/components/TaskForm';
import { TasksList } from '@/components/TasksList';
import { TasksRemaining } from '@/components/TasksRemaining';

export default function TodoApp() {
  const {
    tasks,
    isLoading,
    addTask,
    handleToggleCompleteTask,
    handleDeleteTask,
    handleDeleteCompletedTasks,
  } = useTasks();

  return (
    <div className="h-screen w-screen max-w-[1280px] p-2 sm:p-4 flex justify-center items-center">
      <div className="min-h-[50vh] max-h-full w-full max-w-[600px] bg-zinc-100 border-2 border-zinc-800 rounded-3xl flex flex-col">
        <main className="py-8 px-4 sm:px-10 flex-grow flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-6">
            <header className="my-2">
              <h1 className="text-4xl text-center">TODO App</h1>
            </header>

            <TaskForm addTask={addTask} />

            <section className="max-h-[50vh] py-2 overflow-y-auto overflow-x-hidden">
              <ul className="flex flex-col gap-4">
                <TasksList
                  tasks={tasks}
                  isLoading={isLoading}
                  handleToggleCompleteTask={handleToggleCompleteTask}
                  handleDeleteTask={handleDeleteTask}
                />
              </ul>
            </section>
          </div>

          <TasksRemaining tasks={tasks} handleDeleteCompletedTasks={handleDeleteCompletedTasks} />
        </main>
      </div>
    </div>
  );
}
