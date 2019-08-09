import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.scss']
})
export class ParentcomponentComponent implements OnInit {

  constructor() { }

  
  message: string
  msg: string
  messageData: string;
  ngOnInit() {
   
  }

  reciveMessage($event){
    this.msg = $event
    console.log('receive mesg ==>',this.msg);
  }
}
