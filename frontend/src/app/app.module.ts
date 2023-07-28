import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BoardCardComponent } from './components/board-card/board-card.component';

import { MatIconModule } from '@angular/material/icon';
import { BoardPageComponent } from './pages/board-page/board-page.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';

@NgModule({
    declarations: [AppComponent, HomePageComponent, BoardCardComponent, BoardPageComponent, TaskListItemComponent],
    imports: [BrowserModule, AppRoutingModule, MatIconModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
