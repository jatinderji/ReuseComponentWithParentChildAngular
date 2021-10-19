import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reuse Component with Parent Child Example';
  userDetails =[
    {name:'Jatinder', email:'jatinder@gmail.com'},
    {name:'Teena', email:'teena@gmail.com'},
    {name:'Meena', email:'meena@gmail.com'},
    {name:'Sonia', email:'sonia@gmail.com'},
  ];
}
