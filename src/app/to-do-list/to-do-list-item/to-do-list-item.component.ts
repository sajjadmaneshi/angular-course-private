import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskImportanceEnum} from "../models/task-importance.enum";
import {TaskStatusEnum} from "../models/task-status.enum";
import {ToDoListModelClass} from "../models/to-do-list-model-class";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
  @Input('taskData') task!:ToDoListModelClass;
  @Output() delete=new EventEmitter<number>()


taskId=1;
taskStatus=false;

innerText='hello world!'



returnTaskStatus(){
  return this.taskStatus;
}

    protected readonly TaskImportanceEnum = TaskImportanceEnum;
    protected readonly taskStatusEnum = TaskStatusEnum;

  onDeleteTask(id: number) {
    this.delete.emit(id);
  }
}
