import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/_services/account';
import { UserProfileModel } from 'src/app/_models';

@Component({
  selector: 'app-dash-navigation',
  templateUrl: './dash-navigation.component.html',
  styleUrls: ['./dash-navigation.component.scss']
})
export class DashNavigationComponent implements OnInit {
  toggleNave;
  user: UserProfileModel;
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.user = this.accountService.currentUserProfileValue;
  }
  signOut() {
    this.accountService.signOut();
  }
  isAdmin() {
    return Number(this.user.RoleId) === 2;
  }
}
