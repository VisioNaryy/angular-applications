import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({ providedIn: 'root' }) // to use this class in a dependency injection
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const { value } = control;

    return this.authService.usernameAvailable(value).pipe(
      map(() => {
        //FIX: if status code of our request is 200, it means, that value will be returned by default, otherwise we will emit an error object.
        return null;
      }),
      catchError((err) => {
        console.log(err);

        if (err.error.username) {
          return of({ nonUniqueUsername: true }); //shortcup for a new Observable
        } else {
          return of({ noInternetConnection: true });
        }
      })
    );
  };
}
