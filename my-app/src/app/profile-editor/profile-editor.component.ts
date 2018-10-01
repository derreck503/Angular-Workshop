import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm: FormGroup;
  validationMessage: string;
  showValidation: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validationMessage = '';
    this.showValidation = false;

    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        address1: ['', [Validators.required, Validators.minLength(5)]],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    this.showValidation = true;
    console.log(this.profileForm);

    if (this.profileForm.valid) {
      this.validationMessage = 'Form is valid and saved...';
    } else {
      this.validationMessage = 'Form is invalid';
    }
  }
}
