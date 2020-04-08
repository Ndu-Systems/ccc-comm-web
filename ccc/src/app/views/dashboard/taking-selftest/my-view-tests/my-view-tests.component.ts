import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/_models/test.model';
import { SEVERITY_CONSTANTS } from 'src/app/_models/severity-constants';
import { TestingService, AccountService } from 'src/app/_services';
import { UserProfileModel } from 'src/app/_models';

@Component({
  selector: 'app-my-view-tests',
  templateUrl: './my-view-tests.component.html',
  styleUrls: ['./my-view-tests.component.scss']
})
export class MyViewTestsComponent implements OnInit {

  tests: Test[] = [];
  name = 'Tests';
  subText = 'List Test';
  severityList = SEVERITY_CONSTANTS;
  filterRisk;
  user: UserProfileModel;
  constructor(
    private testingService: TestingService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.testingService.allTests.subscribe(data => {
      this.tests = data;
    });
    this.user = this.accountService.currentUserProfileValue;
    this.testingService.getMyTests(this.user.UserProfileId);
  }

}
