import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
taskId=1;
taskStatus=false;

innerText='hello world!'



returnTaskStatus(){
  return this.taskStatus;
}
}
