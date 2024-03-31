import React from 'react';
import { TasksProvider } from '@/providers/TasksProvider';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <TasksProvider>{children}</TasksProvider>
    </React.Suspense>
  );
};
