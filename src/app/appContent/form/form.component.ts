import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  regForm: FormGroup;
  source: string;
  emptyDetails: boolean = true;
  cardView: {}[] = [];
  data: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.regForm = new FormGroup(
      {
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [
          Validators.minLength(8),
          Validators.required,
        ]),
        confirmPassword: new FormControl(null, [
          Validators.minLength(8),
          Validators.required,
        ]),
        userComment: new FormControl(null, [
          Validators.minLength(8),
          Validators.required,
        ]),
      },
      {
        validators: this.passwordMismatchCheck,
      }
    );
    console.log(this.regForm);
  }
  passwordMismatchCheck(form: FormGroup) {
    const password = form.get('password');
    const cpassword = form.get('confirmPassword');
    if (password?.value !== cpassword?.value) {
      return {
        mismatch: true,
      };
    } else {
      return null;
    }
  }
  submit() {
    this.emptyDetails = false;

    console.log(this.regForm.value, this.regForm);
    this.cardView.push(this.regForm.value);

    this.regForm.reset();
  }
}
