import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/_services/testing/testing.service';
import { Test } from 'src/app/_models/test.model';
import { QuestionService } from 'src/app/_services/testing/question.service';

@Component({
  selector: 'app-taking-selftest',
  templateUrl: './taking-selftest.component.html',
  styleUrls: ['./taking-selftest.component.scss']
})
export class TakingSelftestComponent implements OnInit {
  step;
  test: Test;
  constructor(
    private testingService: TestingService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.test = this.testingService.currentTest;
    this.step = this.test.Step;
    this.questionService.getQuestions();
  }

}
