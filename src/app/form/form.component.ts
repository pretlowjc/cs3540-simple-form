import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  submitted: boolean = false;

  onSubmit(formData: any) {
    this.submitted = true;
    console.log('Form Data:', formData.value);
  }
}
