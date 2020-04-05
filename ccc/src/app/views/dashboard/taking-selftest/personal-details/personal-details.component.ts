import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SignUpModel, UserProfileModel } from 'src/app/_models';
import { TestingService } from 'src/app/_services/testing/testing.service';
import { Test, initTest } from 'src/app/_models/test.model';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  showOtherUserForm: boolean = true;
  heading = ' Take a new test';
  question = 'Please choose who you are taking this test for.';
  rForm: FormGroup;
  hidePassword = true;
  error: string;
  dobDate = new Date(1990, 0, 1);
  constructor(
    private fb: FormBuilder,
    private routeTo: Router,
    private route: ActivatedRoute,
    private testingService: TestingService
  ) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      FirstName: [null, Validators.required],
      Surname: ['na', Validators.required],
      Email: ['test@mail.com', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      Password: [null], //
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
    this.testingService.initState(test);
  }

  myself(isTheTestMine: boolean) {
    if (!isTheTestMine) {
      this.showOtherUserForm = true;
      this.heading = 'Take a test for another person';
      this.question = 'Please enter their details below';
    }
  }
}
