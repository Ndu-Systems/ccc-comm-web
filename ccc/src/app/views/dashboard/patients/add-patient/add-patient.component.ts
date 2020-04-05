import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, UserService } from 'src/app/_services';
import { UserProfileModel } from 'src/app/_models';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  name = 'Patients';
  subText = 'Add new patient';
  currentUser: UserProfileModel;
  rForm: FormGroup;
  dobDate = new Date(1990, 0, 1);
  updatedAge = 0;
  constructor(
    private fb: FormBuilder,
    private routeTo: Router,
    private accountService: AccountService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.currentUser = this.accountService.currentUserProfileValue;
    this.rForm = this.fb.group({
      Email: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      Password: ['0000'],
      FirstName: [null, Validators.required],
      Surname: [null, Validators.required],
      Age: [this.updatedAge],
      DOB: [this.dobDate, Validators.required],
      Sex: [null],
      ContactNumber: [null, Validators.compose([
        Validators.minLength(10),
        Validators.required
      ])],
      Address: [null],
      City: [null],
      Province: [null],
      PostCode: [null],
      ParentFirstName: [null],
      ParentSurname: [null],
      RoleId: [0],
      OrganizationId: [null],
      CreateUserId: [this.currentUser.UserProfileId, Validators.required],
      StatusId: [1]
    });
  }
  calculateAge(model: UserProfileModel): number {
    const timeDiff = Math.abs(Date.now() - model.DOB.getTime());
    this.updatedAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    model.Age = this.updatedAge;
    console.log(this.updatedAge);
    return this.updatedAge;

  }
  onSubmit(model: UserProfileModel) {
    this.userService.addUser(model).subscribe(data => {
      if (data.Email) {
        this.userService.getAllUsers();
        this.routeTo.navigate(['dashboard/patients']);
      }
    });
  }
}
