import {TaskStatusEnum} from "./task-status.enum";
import {TaskImportanceEnum} from "./task-importance.enum";

export interface ToDoListModel{
  id:number;
  name:string;
  status:TaskStatusEnum;
  importance:TaskImportanceEnum;
  generateTask():any;
}
