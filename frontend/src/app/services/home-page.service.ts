import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError } from 'rxjs';
import { Board } from '../types/board';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HomePageService {
    private api = environment.backendUrl;
    constructor(private http: HttpClient) {}

    addNewBoard(newBoard: Board): Observable<Board> {
        return this.http.post<Board>(`${this.api}/addBoard`, newBoard);
    }
}
