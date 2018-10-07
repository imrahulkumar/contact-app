import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  data:any=[];
  constructor() { }

  ngOnInit() {
    this.data = JSON.parse((localStorage.getItem("data")));
  }

}
