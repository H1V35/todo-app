import { AppProvider } from '@/providers/app';
import { TodoApp } from '@/components/TodoApp';

export default function App() {
  return (
    <AppProvider>
      <TodoApp />
    </AppProvider>
  );
}
