import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';

import { addBoard, addBoardSuccess, errorEncountered } from '../Actions/home-page.actions';
import { HomePageService } from '../../services/home-page.service';

@Injectable()
export class HomePageEffects {
    addBoard$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(addBoard),
                concatMap(({board}) =>
                    this.service
                        .addNewBoard(board)
                        .pipe(
                            map((newBoard: any) => 
                                addBoardSuccess(newBoard),
                            ),
                            catchError(async () => errorEncountered()),
                        ),
                ),
            )
    );

    constructor(
        private actions$: Actions,
        private service: HomePageService,
    ) {}
}
