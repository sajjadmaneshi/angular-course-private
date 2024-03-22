import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-task-name',
  templateUrl: './task-name.component.html',
  styleUrls: ['./task-name.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TaskNameComponent {
@Input()name:string=''
}
