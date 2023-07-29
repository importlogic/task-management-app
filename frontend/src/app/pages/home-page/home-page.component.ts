import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import {
    addBoard,
    addBoardSuccess,
    getBoards,
} from '../../Store/Actions/home-page.actions';

import { Board } from '../../types/board';
import { AppState } from '../../types/app-state';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent implements AfterViewInit, OnInit {
    allBoards$: Observable<Board[]>;
    status$: Observable<string>;
    global$: Observable<AppState>;

    @ViewChild('disclaimer') disclaimer: ElementRef | undefined;

    title: string = '';
    description: string = '';

    constructor(private store: Store<AppState>, private router: Router) {
        this.allBoards$ = this.store.pipe(select((state) => state.boards));
        this.status$ = this.store.select((state) => state.status);
        this.global$ = this.store;
    }

    ngOnInit(): void {
        // this.getAllBoards();
    }

    ngAfterViewInit(): void {
        this.disclaimer?.nativeElement.showModal();
    }

    closeModal(): void {
        this.disclaimer?.nativeElement.close();
    }

    goToTasks(): void{  
        this.router.navigateByUrl('/board')
    }

    getAllBoards(): void {
        this.store.dispatch(getBoards());
    }

    addNewBoard(event: any): void {
        if (event.submitter.innerText != 'CANCEL') {
            let board: Board = {
                title: this.title,
                description: this.description,
                taskList: [],
            };

            this.store.dispatch(addBoard({ board }));
        }

        this.title = "";
        this.description = "";
    }
}
