import { Injectable } from '@angular/core';
import { Test, initTest } from 'src/app/_models/test.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  private _test: BehaviorSubject<Test>;
  public test: Observable<Test>;

  private _allTests: BehaviorSubject<Test[]>;
  public allTests: Observable<Test[]>;

  url: string;
  constructor(
    private http: HttpClient,

  ) {
    this._test = new BehaviorSubject<Test>(JSON.parse(localStorage.getItem('user_test')) || initTest);
    this.test = this._test.asObservable();

    this._allTests = new BehaviorSubject<Test[]>(JSON.parse(localStorage.getItem('all_tests')) || []);
    this.allTests = this._allTests.asObservable();

    this.url = environment.API_URL;

  }

  public get currentTest(): Test {
    return this._test.value;
  }

  updateState(data: Test) {
    if (data) {
      this._test.next(data);
      localStorage.setItem('user_test', JSON.stringify(data));
    }
  }

  updateAllTestsState(data: any) {
    if (data) {
      this._allTests.next(data);
      localStorage.setItem('all_tests', JSON.stringify(data));
    }
  }
  postTest(data): Observable<Test[]> {
    return this.http.post<any>(`${this.url}/api/test/do-a-test.php`, data);
  }
  getAll(statusId) {
    return this.http.get<any>(`${this.url}/api/test/get-tests.php?StatusId=${statusId}`).subscribe(data => {
      this.updateAllTestsState(data || []);
    });
  }
  getMyTests(userId) {
    return this.http.get<any>(`${this.url}/api/test/get-user-tests.php?UserProfileId=${userId}`).subscribe(data => {
      this.updateAllTestsState(data || []);
    });
  }

}
