import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionService, AccountService } from 'src/app/_services';
import { Router } from '@angular/router';
import { UserProfileModel, Question } from 'src/app/_models';
import { SEVERITY_CONSTANTS } from 'src/app/_models/severity-constants';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  name = 'Questions';
  subText = 'Add new question';
  currentUser: UserProfileModel;
  rForm: FormGroup;
  severityList = SEVERITY_CONSTANTS;
  error = '';
  constructor(
    private fb: FormBuilder,
    private routeTo: Router,
    private accountService: AccountService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.currentUser = this.accountService.currentUserProfileValue;
    this.rForm = this.fb.group({
      Name: [null, Validators.required],
      Question: [null, Validators.required],
      SecondaryQuestion: [null, Validators.required],
      Severity: [null, Validators.required],
      CreateUserId: [this.currentUser.UserProfileId, Validators.required],
      ModifyUserId: [this.currentUser.UserProfileId, Validators.required],
      Option1: [null],
      Option2: [null],
      Option3: [null],
      StatusId: [1]
    });
  }

  onSubmit(model: Question) {
    this.questionService.addAQuestion(model).subscribe(data => {
      if (data.QuestionId) {
        this.routeTo.navigate(['dashboard/questions']);
      } else {
        this.error = data;
      }
    });
  }

}
