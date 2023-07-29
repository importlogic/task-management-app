import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BoardCardComponent } from './components/board-card/board-card.component';

import { MatIconModule } from '@angular/material/icon';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomePageEffects } from './Store/Effects/home-page.effects';
import { HomePageReducers } from './Store/Reducers/home-page.reducers';
import { FormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        BoardCardComponent,
        BoardPageComponent,
        TaskListItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MatIconModule,
        StoreModule.forRoot({ Root: HomePageReducers }),
        EffectsModule.forRoot([HomePageEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: false, // Restrict extension to log-only mode
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
