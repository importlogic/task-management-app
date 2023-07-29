import { createSelector } from '@ngrx/store';
import { AppState } from '../../types/app-state';
import { Board } from 'src/app/types/board';

// export const selectAllBoards = createSelector(
//   (state: AppState) => state.boards,
//   (state: Board[]) => {
//     return state
//   }
// );

// export const selectStatus = createSelector(
//     (state: AppState) => state.status,
//     (state: string) => {
//         return state
//     }
// );