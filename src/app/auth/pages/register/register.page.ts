import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  registerForm: FormGroup;
  formActive = false;
  submitted = false;
  isAuthenticatingIndicator = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.buildLoginForm();
  }

  buildLoginForm(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email ] ],
      password: ['', [ Validators.required,  Validators.minLength(6) ] ]
    });
    this.formActive = true;
  }

  login(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  }

  ionViewDidLeave() {
    this.submitted = false;
    this.registerForm.reset();
  }

  showPassword(password): void {
    password.type = password.type === 'password' ? 'text' : 'password';
  }}
