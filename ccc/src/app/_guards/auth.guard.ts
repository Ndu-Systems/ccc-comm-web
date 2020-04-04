import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountService } from '../_services/account';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  constructor(
    private routeTo: Router,
    private accountService: AccountService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.accountService.currentUserProfileValue;
    if (!currentUser) {
      this.routeTo.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }
}
