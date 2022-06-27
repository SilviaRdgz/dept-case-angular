import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent {

  @HostListener('window:scroll', ["$event"])

  onScroll(event: any) {
    let modify = document.getElementById('form-container')!;
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;

    if ((pos > max)) {
      modify.classList.add('show');
      modify.classList.remove('hide');
    } else {
      modify.classList.remove('show');
      modify.classList.add('hide');
    }
  }


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
