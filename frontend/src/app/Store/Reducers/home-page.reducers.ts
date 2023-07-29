import { AppState } from '../../types/app-state';
import { createReducer, on } from '@ngrx/store';
import {
    addBoardSuccess,
    errorEncountered,
} from '../Actions/home-page.actions';

const initialState: AppState = {
    status: 'loading',
    error: null,
    boards: [],
};

export const HomePageReducers = createReducer(
    initialState,
    on(addBoardSuccess, (state, res: any) => ({
        status: res.status === 'OK' ? 'idle' : 'error',
        error: res.message || null,
        boards: [
            ...state.boards,
            {
                id: res.board._id,
                title: res.board.title,
                description: res.board.description,
                taskList: res.board.taskList,
            },
        ],
    })),
    on(errorEncountered, (state) => ({
        status: 'error',
        error: 'Something went wrong please try again later.',
        boards: [...state.boards],
    })),
);
