import { Injectable } from '@angular/core';
import { Test } from 'src/app/_models/test.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  private _test: BehaviorSubject<Test>;
  public test: Observable<Test>;

  url: string;
  constructor(
    private http: HttpClient,

  ) {
    this._test = new BehaviorSubject<Test>(JSON.parse(localStorage.getItem('user_test')));
    this.test = this._test.asObservable();

    this.url = environment.API_URL;

  }

  public get currentTest(): Test {
    return this._test.value;
  }

  initState(data: Test) {
    if (data) {
      this._test.next(data);
      localStorage.setItem('user_test', JSON.stringify(data));
    }

  }

}
