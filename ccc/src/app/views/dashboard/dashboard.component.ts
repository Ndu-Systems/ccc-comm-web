import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AccountService } from 'src/app/_services';
import { UserProfileModel } from 'src/app/_models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;
  user: UserProfileModel;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private accountService: AccountService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

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
