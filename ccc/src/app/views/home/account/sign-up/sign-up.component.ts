import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/_services/account';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpModel, PROVINCES, UserProfileModel } from 'src/app/_models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  rForm: FormGroup;
  hidePassword = true;
  error: string;
  dobDate = new Date(1990, 0, 1);
  provinces = PROVINCES;
  updatedAge = 0;
  constructor(
    private fb: FormBuilder,
    private routeTo: Router,
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      FirstName: [null, Validators.required],
      Surname: [null, Validators.required],
      Email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      Password: [null, Validators.required],
      Age: [this.updatedAge],
      DOB: [this.dobDate, Validators.required],
      ContactNumber: [null, Validators.compose([
        Validators.minLength(10),
        Validators.required
      ])],
      CreateUserId: ['sys', Validators.required],
      Address: [null, Validators.required],
      City: [null, Validators.required],
      Province: [null, Validators.required],
      PostCode: [null],
      StatusId: [1]
    });
  }

  calculateAge(model: UserProfileModel): number {
    const timeDiff = Math.abs(Date.now() - model.DOB.getTime());
    this.updatedAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    model.Age = this.updatedAge;
    return this.updatedAge;
  }

  onSubmit(model: SignUpModel) {
    model.Age = this.updatedAge;
    this.accountService.signUp(model).subscribe(data => {
      if (data.Email) {
        this.routeTo.navigate(['/get-started']);
      } else {
        this.error = 'An error occurred, please contact support desk';
      }
    });
  }

}
