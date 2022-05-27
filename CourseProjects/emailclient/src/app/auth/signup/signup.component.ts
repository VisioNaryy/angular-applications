import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate] // NOTE: array for async validators (3-d parameter of FormControl-constructor). Invoking only after passing our synchronous validators
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] } // NOTE: object for formGroup() validators
  );

  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    this.authService
      .signup(this.authForm.value) //FIX: instead of catching errors in pipe() method, we will do it inside of subscribe() method
      .subscribe({
        next: (response) => {
          //Navigate to some other route
          console.log(this);
        },
        error: (err) => {
          if (!err.status) {
            this.authForm.setErrors({ noInternetConnection: true });
          } else {
            this.authForm.setErrors({ unknownError: true });
          }
        },
      });
  }
}
