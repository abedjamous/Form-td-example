import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selected = "pet";
  answer = '';
  genders = ['male', 'female'];
  suggestUserName = '';

onClick() {
  this.suggestUserName = 'superuser'
}

// onSubmit(form: NgForm) {
//   console.log(form)
// }

onSubmit(form:NgForm) {
  console.log(form);
}
  
}
