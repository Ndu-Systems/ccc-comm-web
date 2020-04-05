import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Question } from 'src/app/_models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private _questions: BehaviorSubject<Question[]>;
  public questions: Observable<Question[]>;

  url: string;
  constructor(
    private http: HttpClient,

  ) {
    this._questions = new BehaviorSubject<Question[]>(JSON.parse(localStorage.getItem('questions')));
    this.questions = this._questions.asObservable();

    this.url = environment.API_URL;

  }

  public get currentTest(): Question[] {
    return this._questions.value;
  }

  initState(data: Question[]) {
    if (data) {
      this._questions.next(data);
      localStorage.setItem('questions', JSON.stringify(data));
    }
  }

  getQuestions() {
    return this.http.get<any>(`${this.url}/api/question/get-question.php?StatusId=1`).subscribe(data => {
      this.initState(data);
    });
  }
}
