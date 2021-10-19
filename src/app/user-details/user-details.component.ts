// Import Input Decorator
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }
  
  //  Use Input Decorator with default value NA
  @Input() item = {name:"NA",email:"NA"}

  ngOnInit(): void {
  }

}
