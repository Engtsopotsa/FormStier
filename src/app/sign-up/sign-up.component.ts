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

  userAddressInfo: any = {
    street: '1234 Main Street',
    city: 'My City',
    state: this.stateOptions[0],
    zip: '12345',
  };

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

  autoFillAddress() {
    this.signUpForm.patchValue({
      address: {
        street: this.userAddressInfo.street,
        city: this.userAddressInfo.city,
        state: this.userAddressInfo.state,
        zip: this.userAddressInfo.zip,
      },
    });
  }

  clear() {
    this.signUpForm.reset();
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
