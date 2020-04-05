import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/_services/account';

@Component({
  selector: 'app-dash-navigation',
  templateUrl: './dash-navigation.component.html',
  styleUrls: ['./dash-navigation.component.scss']
})
export class DashNavigationComponent implements OnInit {
  name = 'Dashboard';
  subText = 'Quick stats';
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() { }
  signOut() {
    this.accountService.signOut();
  }
}
