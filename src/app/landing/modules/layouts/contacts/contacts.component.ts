import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from './services/contacts.services';
import { GenerateUUIDService } from 'src/app/constants/generateId.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  selectedPage: string = 'uzbekistan';
  submitted = false;
  initialFormState: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    private generateUUIDService: GenerateUUIDService
  ) { }

  showGermany() {
    this.selectedPage = 'germany';
  }

  showPoland() {
    this.selectedPage = 'poland';
  }

  showUzbekistan() {
    this.selectedPage = 'uzbekistan';
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
    subject: new FormControl(''),
    phone: new FormControl(''),
    text: new FormControl(''),
  });

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required]],
        subject: ['', Validators.required],
        text: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        city: ['', [Validators.required]],
      },
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const now = new Date();
    const isoDateString = now.toISOString();

    const userObj = {
      fullName: this.form.value.fullName,
      phone: this.form.value.phone,
      email: this.form.value.email,
      subject: this.form.value.subject,
      text: this.form.value.text,
      city: this.form.value.city,
      id: this.generateUUIDService.generateUUID(),
      createdDate: isoDateString,
      updatedDate: this.isUpdate() ? isoDateString : undefined
    }

    this.contactsService.postMessage(userObj).subscribe(res=>{
      console.log(res);
      this.form.reset();
    })
    this.submitted = false;
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  isUpdate(): boolean {
    return Object.keys(this.initialFormState).some(key => this.initialFormState[key] !== this.form.value[key]);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
