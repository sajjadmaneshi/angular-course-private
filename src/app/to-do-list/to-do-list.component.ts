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
  twoWayBinding='hello';
  tasks:{id:number,name:string,status:'enable'|'disable',importance:string}[]=[];
  taskStatus!:'enable'|'disable';
  static id=1;
  importance!: string;
  constructor() {
    setTimeout(()=>{
      this.allowedAddNewTask=true;
    },5000);

  }

  addTask(){
    //
    // console.log('on button click')
    // console.log(event)
    // this.showNewTask=true;
    if(this.taskName){
      const id=Math.random();

      this.tasks.push({id,name:this.taskName,status:this.returnTaskStatus(id),importance:this.importance});
      // ToDoListComponent.id++;
    }

  }

  returnTaskStatus(id:number){
   if(id>0.5){
     return 'enable'
   }else {
     return 'disable'
   }
  }

  sendTaskName(event:any){
    this.taskName=event.target.value
  }

 myTrack(index:number,item:{id:number,name:string}) {

    return item.id
  }

  test($event: MouseEvent) {

  }
}
