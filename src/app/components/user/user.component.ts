import { Component, OnInit } from '@angular/core';

// services
import { UserService } from '../../services/user.service';

// models
import { User } from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[];

  constructor(private dataService:UserService) {}

  ngOnInit() {
    // get the user data
    this.dataService.list().subscribe
    (
      data => {
        console.log(data);
        this.users = data;
       });
  }
}
