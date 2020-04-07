import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/_models/test.model';
import { TestingService } from 'src/app/_services';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.scss']
})
export class ViewTestsComponent implements OnInit {

  tests: Test[] = [];
  displayedColumns: string[] = ['FirstName', 'contactnumber', 'email', 'age', 'address', 'enrollmentDate', 'status'];
  name = 'Tests';
  subText = 'List Test';
  filterRisk;
  constructor(
    private testingService: TestingService
  ) { }

  ngOnInit() {
    this.testingService.allTests.subscribe(data => {
      this.tests = data;
    });
    this.testingService.getAll(1);
  }

}