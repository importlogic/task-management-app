import { Task } from './task';

export interface Board {
    id?: string;
    title: string;
    description: string;
    taskList: Task[];
}
