import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SignUpModel, UserProfileModel } from 'src/app/_models';
import { TestingService } from 'src/app/_services/testing/testing.service';
import { Test, initTest } from 'src/app/_models/test.model';
import { AccountService } from 'src/app/_services/account';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  showOtherUserForm: boolean;
  heading = ' Take a new test';
  question = 'Please choose who you are taking this test for.';
  rForm: FormGroup;
  hidePassword = true;
  error: string;
  dobDate = new Date(1990, 0, 1);
  user: UserProfileModel;
  constructor(
    private fb: FormBuilder,
    private routeTo: Router,
    private route: ActivatedRoute,
    private testingService: TestingService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.user = this.accountService.currentUserProfileValue;
    this.rForm = this.fb.group({
      FirstName: [null, Validators.required],
      Surname: ['na', Validators.required],
      Email: [`${new Date().getTime() * 12}@rand.com`, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      Password: ['default-other-user'], //
      Age: [],
      DOB: [''],
      Sex: [''],
      ContactNumber: [null, Validators.required], // relationship
      CreateUserId: ['sys', Validators.required],
      StatusId: [1]
    });
  }

  onSubmit(model: UserProfileModel) {
    console.log(model);
    const test: Test = initTest;
    test.User = model;
    test.Step = 2;
    this.testingService.updateState(test);
  }

  myself(isTheTestMine: boolean) {
    if (!isTheTestMine) {
      this.showOtherUserForm = true;
      this.heading = 'Take a test for another person';
      this.question = 'Please enter their details below';
    } else {
      const test: Test = this.testingService.currentTest;
      test.Step = 2;
      test.User = null;
      test.UserProfileId = this.user.UserProfileId;

      this.testingService.updateState(test);
    }
  }
}
