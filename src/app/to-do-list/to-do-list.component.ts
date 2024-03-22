import {Component, ElementRef, ViewChild} from "@angular/core";
import {ToDoListModel} from "./models/to-do-list.model";
import {TaskStatusEnum} from "./models/task-status.enum";
import {TaskImportanceEnum} from "./models/task-importance.enum";
import {ToDoListModelClass} from "./models/to-do-list-model-class";


@Component(
  {
    selector:'app-to-do-list',
      templateUrl:'to-do-list.component.html',
    // template:`
    //   <h1>to-do-list work correctly</h1>
    //   <h2>h2</h2>
    // `,
     styleUrls:['to-do-list.component.scss']
    // styles:[
    //   `h2{
    //     color: red;
    //   }

  }
)
export class ToDoListComponent  {

  @ViewChild('inputElement') inputElement!:ElementRef;

  allowedAddNewTask=false;
  taskName='';
  tasks:ToDoListModelClass[]=[];
  importance:TaskImportanceEnum= TaskImportanceEnum.LOW;

  importanceEnum=TaskImportanceEnum;
  taskStatusEnum=TaskStatusEnum;

  findTaskName=''
  task=new ToDoListModelClass(0,'task1',TaskStatusEnum.ENABLE, TaskImportanceEnum.LOW)
  static id=1;
  constructor() {
    setTimeout(()=>{
      this.allowedAddNewTask=true;
    },5000);

  }



  addTask(){
    if(this.taskName){
      const id=Math.random();
      const newTask={
        id:ToDoListComponent.id,
        name:this.taskName,
        status:this.returnTaskStatus(id),
        importance:this.importance,
        generateTask(): any {
        }
      } as ToDoListModel;
      // const newTask2={
      //   id,
      //   name:this.taskName,
      //   status:this.returnTaskStatus(id),
      //   importance:this.importance,
      // }as ToDoListModelClass;
      const newTask2=new
      ToDoListModelClass(ToDoListComponent.id,this.taskName,this.returnTaskStatus(id),this.importance);


      this.tasks.push(newTask2);
     // const task= this.tasks.find((x)=>x.id===2);
     // if(task){
     //   console.log(task.name);
     // }

      ToDoListComponent.id++;
    }



  }

  returnTaskStatus(id:number){

    return id>0.5 ?TaskStatusEnum.ENABLE:TaskStatusEnum.DISABLE
  }

  sendTaskName(event:any){
    this.taskName=event.target.value
  }

  deleteTask(position:number){
    this.tasks.splice(position,1);

  }

 myTrack(index:number,item:{id:number,name:string}) {

    return item.id
  }


  protected readonly TaskImportanceEnum = TaskImportanceEnum;

  onDeleteTask($event: number) {
    console.log($event)
    const taskIndex=this.tasks.findIndex(x=>x.id===$event);
    if(taskIndex!=-1){
      this.tasks.splice(taskIndex,1)
    }
  }
}
