import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  userform: FormGroup;
  username: string | undefined = undefined;
  email: string | undefined = undefined;
  valid: boolean = false;
  constructor() {
    this.userform = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.userform.controls['email'].status === 'VALID') {
      this.username = this.userform.value.username;
      this.email = this.userform.value.email;
    }
  }
  onInput(): boolean {
    return this.userform.controls['email'].status === 'VALID' ? true : false;
  }
}
