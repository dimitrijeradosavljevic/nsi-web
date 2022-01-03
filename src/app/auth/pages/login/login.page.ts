import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
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
  }

  ionViewDidLeave() {
    this.submitted = false;
    this.loginForm.reset();
  }

  showPassword(password): void {
    password.type = password.type === 'password' ? 'text' : 'password';
  }
}
