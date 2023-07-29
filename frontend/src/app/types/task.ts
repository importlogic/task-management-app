interface Event {
    time: Date;
    description: string;
}

export interface Task {
    id?: string;
    title: string;
    description: string;
    endDate: Date;
    completed: boolean;
    priority: string;
    history: Event[];
}
