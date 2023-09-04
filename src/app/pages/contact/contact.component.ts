import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
declare var window: any;

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
    message: '',
    confirm: false
  });

  showSuccess = false;
  showNameError = false;
  showEmailError = false;
  showMessageError = false;
  showConfirmationError = false;

  constructor(private fb: FormBuilder) {}

  formModal: any;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }

  checkValidation() {
    this.showNameError = false;
    this.showEmailError = false;
    this.showMessageError = false;
    this.showConfirmationError = false;
    if (this.form.controls['from_name']?.invalid) {
      this.showNameError = true;
    }
    if (this.form.controls['from_email']?.invalid) {
      this.showEmailError = true;
    }
    if (this.form.controls['message']?.invalid) {
      this.showMessageError = true;
    }
    if (this.form.controls['confirm']?.invalid) {
      this.showConfirmationError = true;
    }
  }

  async send() {
    if (this.form.valid) {
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

}
