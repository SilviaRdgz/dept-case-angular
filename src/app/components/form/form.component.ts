import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent {

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.email],
    message: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder) {
  }

  onSubmit() {
    console.warn(this.contactForm.value);
  }


}
