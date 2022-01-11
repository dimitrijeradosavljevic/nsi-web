import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector:    'app-login',
  templateUrl: './login.page.html',
  styleUrls:   ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  formActive = false;
  submitted = false;
  isAuthenticatingIndicator = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.buildLoginForm();
  }

  buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ] ],
      password: ['', [ Validators.required,  Validators.minLength(6) ] ]
    });
    this.formActive = true;
  }

  login(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    localStorage.setItem('username', this.loginForm.controls.email.value);
    localStorage.setItem('password', this.loginForm.controls.password.value);

    this.router.navigate(['/search/full-text']);
  }

  ionViewDidLeave() {
    this.submitted = false;
    this.loginForm.reset();
  }

  showPassword(password): void {
    password.type = password.type === 'password' ? 'text' : 'password';
  }
}
