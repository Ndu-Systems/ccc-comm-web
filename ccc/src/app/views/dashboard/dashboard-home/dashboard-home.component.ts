import { UserProfileModel } from 'src/app/_models';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  patients: UserProfileModel[] = [];
  displayedColumns: string[] = ['fullname', 'contactnumber', 'email', 'age', 'address', 'enrollmentDate', 'status'];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.patients = this.userService.currentUserListValue;
    this.userService.getAllUsers();
   }
}
