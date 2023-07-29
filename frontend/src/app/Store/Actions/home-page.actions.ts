import { createAction, props } from '@ngrx/store';

import { Board } from '../../types/board';

export const getBoards = createAction('[Board] Get Boards');

export const addBoard = createAction(
    '[Board] Add Board',
    props<{ board: Board }>(),
);

export const addBoardSuccess = createAction(
    '[Board] Add Board Success',
    props<{ board: any }>(),
);

export const errorEncountered = createAction(
    '[Board] Error Encountered',
);
