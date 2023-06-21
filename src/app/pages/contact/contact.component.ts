import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    message: ''
  });

  showSuccess = false;

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('B-B651oxVR21N8Q2h');
    let response = await emailjs.send("service_rto7y6e","template_vek5im4",{
    from_name: this.form.value.from_name,
    to_name: "Tomasz",
    from_email: this.form.value.from_email,
    message: this.form.value.message,
  });
  this.showSuccess = true;
  this.form.reset();
  }

}
