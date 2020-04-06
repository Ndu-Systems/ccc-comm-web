import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfileModel } from 'src/app/_models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userListObject: BehaviorSubject<UserProfileModel[]>;
  private userListObservable: Observable<UserProfileModel[]>;

  api = environment.API_URL;
  constructor(private http: HttpClient) {
    this.userListObject = new BehaviorSubject<UserProfileModel[]>(JSON.parse(localStorage.getItem('usersList')));
    this.userListObservable = this.userListObject.asObservable();
  }

  public get currentUserListValue(): UserProfileModel[] {
    return this.userListObject.value;
  }

  getAllUsers() {
    this.http.get<UserProfileModel[]>(`${this.api}/api/user/list-users.php`, {})
      .subscribe(data => {
        if (data.length) {
          localStorage.setItem('usersList', JSON.stringify(data));
          this.userListObject.next(data);
        }
      });
  }

  addUser(model: UserProfileModel): Observable<UserProfileModel | any> {
    return this.http.post<UserProfileModel>(`${this.api}/api/user/add-user.php`, model);
  }

}
