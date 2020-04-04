import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account';
import { SignInModel } from 'src/app/_models';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  rForm: FormGroup;
  hidePassword = true;
  error: string;
  returnUrl: string;
  email: string = environment.EMAIL_TEST;
  password: string = environment.PASSWORD_TEST;
  constructor(
    private fb: FormBuilder,
    private routeTo: Router,
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.rForm = this.fb.group({
      Email: new FormControl(
        this.email,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      Password: [this.password, Validators.required],
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'dashboard';
  }

  onSubmit(model: SignInModel) {
    this.accountService.signIn(model).subscribe(data => {
      if (data.Email) {
        this.routeTo.navigate(['/dashboard']);
      }
    })
  }
}
