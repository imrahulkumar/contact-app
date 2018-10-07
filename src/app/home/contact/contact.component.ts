import { Component, OnInit } from '@angular/core';
import {Nexmo}  from 'nexmo';
import {mymessage} from './send.js'
import { element } from 'protractor';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
to:any;
text:any ="hello";

sendedData:any[];

first:any
last:any;
num:any;
add:any;
emailAdd:any;
date:any;

 data : any  =[  {
   FirstName:"Mohan",
   LastName:"Singh",
   Number:"123456789",
   isMessageSend:Boolean,
   details: {
     Address:"delhi, town city",
     email:"mohan@gmail.com",
     dob:"15-8-1999"
   }
} ,
{
  FirstName:"Rahul",
  LastName:"Kumar",
  Number:"+917982813451",
  isMessageSend:Boolean,
  details: {
    Address:"noida, town hall",
    email:"rahul@gmail.com",
    dob:"11-9-1899"
  }
} ,
{
  FirstName:"Sahil",
  LastName:"Rawat",
  Number:"987654321",
  isMessageSend:Boolean,
  details: {
    Address:"Greater, new city",
    email:"sahil@gmail.com",
    dob:"15-8-1999"
  }
} ,
{
  FirstName:"Arpit",
  LastName:"Kumar",
  Number:"234567890",
  isMessageSend:Boolean,
  details: {
    Address:"Uttar Pradesh, hauz khas",
    email:"arpit@gmail.com",
    dob:"5-1-1995"
  }
} ,
{
  FirstName:"Priti",
  LastName:"Pandy",
  Number:"102938465",
  isMessageSend:Boolean,
  details: {
    Address:"Gurugram, civil lines city",
    email:"priti@gmail.com",
    dob:"8-8-2000"
  }
} ,
{
  FirstName:"Priyanka",
  LastName:"Jha",
  Number:"1111111111",
  isMessageSend:Boolean,
  details: {
    Address:"New Delhi, town garden",
    email:"priyanka@gmail.com",
    dob:"4-4-2002"
  }
} ,
{
  FirstName:"Shri",
  LastName:"mavi",
  Number:"00000001122",
  isMessageSend:Boolean,
  details: {
    Address:"Kanpur, modern city",
    email:"shri@gmail.com",
    dob:"16-8-1991"
  }
} 

]

  constructor() { }

  ngOnInit() {
  }
  sendMessage(item)
  {
    
    this.data.map((elem)=>{
      if(elem.FirstName == item.FirstName)
      {
       elem.isMessageSend = true;
       console.log("found");
      }
    })
    localStorage.setItem("data", JSON.stringify(this.data));
    console.log("whole data print",this.data);

  $("#msg").modal("show");
    this.to = item.Number;   
  }
  sendMessageConfirm()
  {
    mymessage(this.to ,this.text);
    $("#msg").modal("hide");
  }
  detail(item)
  {  

    this.first = item.FirstName;
    this.last = item.LastName;
    this.num = item.Number;
    this.add = item.details.Address;
    this.emailAdd = item.details.email;
    this.date = item.details.dob;

    $("#detail").modal("show");
  }
}
