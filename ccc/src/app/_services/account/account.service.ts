import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProfileModel, SignInModel, SignUpModel } from 'src/app/_models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUserProfileUserObject: BehaviorSubject<UserProfileModel>;
  public currentUserProfile: Observable<UserProfileModel>;

  api = environment.API_URL;
  constructor(private http: HttpClient, private routTo: Router) {
    this.currentUserProfileUserObject = new BehaviorSubject<UserProfileModel>(JSON.parse(localStorage.getItem('currentUserProfile')));
    this.currentUserProfile = this.currentUserProfileUserObject.asObservable();
  }

  public get currentUserProfileValue(): UserProfileModel {
    return this.currentUserProfileUserObject.value;
  }

  signIn(model: SignInModel): Observable<UserProfileModel> {
    return this.http.post<UserProfileModel>(`${this.api}/api/account/sign-in.php`, model)
    .pipe(map(data => {
      if (data ) {
        localStorage.setItem('currentUserProfile', JSON.stringify(data));
        this.currentUserProfileUserObject.next(data);
      }
      return data;
    }));
  }

  signUp(model: SignUpModel): Observable<UserProfileModel> {
    return this.http.post<UserProfileModel>(`${this.api}/api/account/sign-up.php`, model);
  }

  signOut() {
    localStorage.removeItem('currentUserProfile');
    this.currentUserProfileUserObject.next(null);
    this.routTo.navigate(['/']);
  }
}
