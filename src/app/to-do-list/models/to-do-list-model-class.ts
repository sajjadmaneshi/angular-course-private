import {TaskStatusEnum} from "./task-status.enum";
import {TaskImportanceEnum} from "./task-importance.enum";

export class ToDoListModelClass{

  constructor(public id:number,
              public name:string,
              public status:TaskStatusEnum,
              public importance:TaskImportanceEnum) {
  }
}
