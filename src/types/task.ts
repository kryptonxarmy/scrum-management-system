type Task = {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'inprogress' | 'done';
  assignee: string;
  completed: boolean;
  createdAt: string;
};
export type { Task };