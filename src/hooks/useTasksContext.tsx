import React from 'react';
import { TasksContext } from '@/providers/TasksProvider';

export function useTasksContext() {
  return React.useContext(TasksContext);
}
