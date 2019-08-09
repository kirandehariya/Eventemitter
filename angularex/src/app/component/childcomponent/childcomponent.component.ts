import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss']
})
export class ChildcomponentComponent implements OnInit {

  constructor() { }

  
  @Input() message: string;
  msg: string
  @Output() messageEvent = new EventEmitter<string>();
  messageData: string;
  ngOnInit() {
    
  }

  sendMessage() {
    this.messageEvent.emit(this.msg)
    console.log('check msg send ==>', this.msg);
  }
}
