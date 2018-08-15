import { UsernameValidators } from './../../common/validators/username.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ValidationErrors, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myForm: any;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  // getters
  get username() { return this.myForm.get('account.username'); }
  get password() { return this.myForm.get('account.password'); }

  createForm() {
    this.myForm = new FormGroup({
      account: new FormGroup({
        username: new FormControl('',
        [Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique),
        password: new FormControl('', Validators.required)
      })
    });
  }

  login() {
    this.myForm.setErrors({
      invalidLogin: true
    })
  }

  ngOnInit() {
  }

}
