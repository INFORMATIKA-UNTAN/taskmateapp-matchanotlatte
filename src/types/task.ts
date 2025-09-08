export interface Task {
  id: number;
  title: string;
  status: 'pending' | 'done';
  description: string;
  category: string;
  deadline: string;
}
