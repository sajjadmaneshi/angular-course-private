import {Component} from "@angular/core";


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
    //   }`

  }
)
export class ToDoListComponent{
  changeEvent='hello'
  allowedAddNewTask=false;
  taskName='';
  showNewTask=false;
  twoWayBinding='hello'
  constructor() {
    setTimeout(()=>{
      this.allowedAddNewTask=true;
    },5000)
  }

  addTask(event:any){
    //
    // console.log('on button click')
    // console.log(event)
    this.showNewTask=true;
  }

  sendTaskName(event:any){
    this.taskName=event.target.value
  }
}
