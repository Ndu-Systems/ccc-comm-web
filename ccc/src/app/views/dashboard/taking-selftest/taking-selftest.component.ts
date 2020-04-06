import { Component, OnInit } from '@angular/core';
import { TestingService } from 'src/app/_services/testing/testing.service';
import { Test, initTest } from 'src/app/_models/test.model';
import { QuestionService } from 'src/app/_services/testing/question.service';
import { Observable } from 'rxjs';
import { Question } from 'src/app/_models/question.model';
import { initAnswer, Answer } from 'src/app/_models/answer.model';
import { AccountService } from 'src/app/_services/account';
import { UserProfileModel } from 'src/app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taking-selftest',
  templateUrl: './taking-selftest.component.html',
  styleUrls: ['./taking-selftest.component.scss']
})
export class TakingSelftestComponent implements OnInit {
  step: any = 1;
  test: Test;
  questions$: Observable<Question[]>;
  question = '';
  heading = '';
  secondaryAnswer;
  questions: Question[];
  isSecondary: boolean;
  currentQuestion: Question;
  user: UserProfileModel;
  isResults: boolean;
  riskLevel: string;
  name = 'Tests';
  subText = 'Take a test';
  active: string;
  constructor(
    private testingService: TestingService,
    private questionService: QuestionService,
    private accountService: AccountService,
    private routeTo: Router,
  ) { }

  ngOnInit() {
    this.user = this.accountService.currentUserProfileValue;
    this.test = this.testingService.currentTest;
    this.questions$ = this.questionService.questions;
    this.questionService.getQuestions();
    this.questionService.questions.subscribe(questions => {
      this.questions = questions;
    });
    this.testingService.test.subscribe(test => {
      if (test) {
        if (test.Step === 'Done') {
          this.calculateRisk();
        } else {
          this.test = test;
          this.step = test.Step;
          if (this.step > 1 && this.questions.length) {
            if (this.questions[this.step - 2]) {
              this.heading = this.questions[this.step - 2].Name;
              this.question = this.questions[this.step - 2].Question;
              this.currentQuestion = this.questions[this.step - 2];
              this.resetQuestionClasses();
              this.questions[this.step - 2].Class = 'active';
              this.riskLevel = '';
              this.isResults = false;
            } else {
              test.Step = 'Done';
              this.testingService.updateState(this.test);
              this.step = 'done';
              return;
            }

          }
        }
        if (this.step === 1) {
          this.active = 'active';
        } else {
          this.active = '';
        }
      }
    });

  }
  calculateRisk() {
    console.log(this.test);
    this.heading = 'Results processed successfully.';
    this.question = 'Your risk level of having the corona virus/ COVID-19 is';
    this.riskLevel = 'low.';
    this.isResults = true;
    this.test.CreateUserId = this.user.UserProfileId;
    this.postTheTest();
  }
  postTheTest() {
    this.testingService.postTest(this.test);
  }

  answer(answer) {
    this.currentQuestion = this.questions[this.step - 2];
    if (answer === 'yes') {
      this.isSecondary = true;
      this.question = this.currentQuestion.SecondaryQuestion;
    } else {
      this.secondaryAnswer = '';
      this.onSecondaryAnswer('no');
    }
  }
  resetQuestionClasses() {
    this.questions.forEach(x => {
      x.Class = '';
    })
  }
  onSecondaryAnswer(a) {

    if (this.currentQuestion) {
      const answer: Answer = {
        QuestionId: '',
        Answer: '',
        SecondaryAnswer: '',
        CreateUserId: '',
        ModifyUserId: '',
        StatusId: '1'
      };
      answer.SecondaryAnswer = this.secondaryAnswer;
      answer.Answer = a;
      answer.CreateUserId = this.user.UserProfileId;
      answer.ModifyUserId = this.user.UserProfileId;
      answer.QuestionId = this.currentQuestion.QuestionId;
      // this.test.Answers.filter(x => x.QuestionId !== this.currentQuestion.QuestionId);
      this.test.Answers.push(answer);
      this.test.Step++;
      this.isSecondary = false;
      this.secondaryAnswer = '';
      this.testingService.updateState(this.test);
    }
  }

  taketestagain() {

    this.testingService.updateState(
      {
        TestId: '',
        UserProfileId: '',
        AddressId: '',
        CreateDate: '',
        CreateUserId: '',
        ModifyDate: '',
        ModifyUserId: '',
        StatusId: '1',
        Answers: [],
        Step: 1
      }
    );
    this.isResults = false;
    this.isSecondary = false;
    this.riskLevel = '';
    this.resetQuestionClasses();
  }

}
