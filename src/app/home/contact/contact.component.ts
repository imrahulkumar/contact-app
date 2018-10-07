import { Component, OnInit } from '@angular/core';
import {Nexmo}  from 'nexmo';
import {mymessage} from './send.js'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
  }
  sendMessage()
  {
    mymessage();
//     this.nexmo = new Nexmo({
//       apiKey: "0e8a6b76",
//       apiSecret: "UsdHKcXtlH0cU8Bg"
//     });
//     console.log("Message send");
//   this.nexmo.message.sendSms(
//   7982813451, '7982813451', 'yo',
//     (err, responseData) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.dir(responseData);
//       }
//     }
//  );
  }
}
