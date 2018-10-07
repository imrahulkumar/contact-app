import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ContactComponent } from './home/contact/contact.component';
import { SendMessageComponent } from './home/send-message/send-message.component';


const routes: Routes = [
  { path: "", component: ContactComponent },
 { path: "send-msg", component: SendMessageComponent },
];

// existActicity/${i}/${item}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
