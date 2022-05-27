import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl('');
  @Input() label: string = '';

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    if (!this.control) return;

    let { dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }
}
