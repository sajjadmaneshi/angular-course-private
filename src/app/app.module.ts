import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToDoListComponent} from "./to-do-list/to-do-list.component";
import { ToDoListItemComponent } from './to-do-list/to-do-list-item/to-do-list-item.component';
import {FormsModule} from "@angular/forms";
import { TaskNameComponent } from './to-do-list/to-do-list-item/task-name/task-name.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    TaskNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
