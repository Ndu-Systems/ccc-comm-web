import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/_services/testing/testing.service';
import { Test } from 'src/app/_models/test.model';
import { QuestionService } from 'src/app/_services/testing/question.service';
import { Observable } from 'rxjs';
import { Question } from 'src/app/_models/question.model';

@Component({
  selector: 'app-taking-selftest',
  templateUrl: './taking-selftest.component.html',
  styleUrls: ['./taking-selftest.component.scss']
})
export class TakingSelftestComponent implements OnInit {
  step;
  test: Test;
  questions$: Observable<Question[]>;
  question = '';
  heading = '';
  questions: Question[];
  constructor(
    private testingService: TestingService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.test = this.testingService.currentTest;
    this.questions$ = this.questionService.questions;
    this.questionService.getQuestions();
    this.questionService.questions.subscribe(questions => {
      this.questions = questions;
    })
    this.testingService.test.subscribe(test => {
      this.step = test.Step;
      if (this.step > 1 && this.questions.length) {
        this.heading = this.questions[this.step - 2].Name;
        this.question = this.questions[this.step - 2].Question;
      }
    });
  }

}
