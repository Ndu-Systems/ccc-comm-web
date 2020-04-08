import { UserProfileModel } from 'src/app/_models';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {
  patients: UserProfileModel[] = [];
  displayedColumns: string[] = ['fullname', 'contactnumber', 'email', 'age', 'address', 'enrollmentDate', 'status'];
  name = 'Dashboard';
  subText = 'Quick stats';
  user: UserProfileModel;
  constructor(
    private userService: UserService,
    private router: Router,
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.patients = this.userService.currentUserListValue;
    this.userService.getAllUsers();
    this.user = this.accountService.currentUserProfileValue;
    if (Number(this.user.RoleId) === 1) {
      this.router.navigate(['dashboard/test']);
    }
  }
}
