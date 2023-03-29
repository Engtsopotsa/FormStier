import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup; //Variable to store our form group
  stateOptions: string[] = ['PA', 'OH', 'MI'];

  constructor() {}

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    });
  }

  clear() {
    this.signUpForm.reset();
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
