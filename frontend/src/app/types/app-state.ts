import { Board } from "./board";

export interface AppState {
    status: string;
    error: string | null;
    boards: Board[];
}
