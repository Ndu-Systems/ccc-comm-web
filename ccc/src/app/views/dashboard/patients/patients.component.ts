import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from 'src/app/_models';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: UserProfileModel[] = [];
  displayedColumns: string[] = ['fullname', 'contactnumber', 'email', 'age', 'address', 'enrollmentDate', 'status'];
  name = 'Patients';
  subText = 'List patients';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.patients = this.userService.currentUserListValue;
    this.userService.getAllUsers();
  }

}
