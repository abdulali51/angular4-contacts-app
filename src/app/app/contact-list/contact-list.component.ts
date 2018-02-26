import { Component, OnInit } from '@angular/core';

import { Contact } from '../shared/contact';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { StorageService } from '../storage-service.service';

//const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  selector: 'app-contact-list',
  providers: [StorageService],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

	public contacts;
	public maxId;
	public form: FormGroup;
	public id = new FormControl();
	public firstName = '';
	public lastName = '';
	public email = '';
	public phone = '';
	public status = true;

  	constructor(private fb: FormBuilder,private storageService: StorageService) {
	    this.form = fb.group({
	      'id' : this.id,
	      'firstName': this.firstName,
	      'lastName': this.lastName,
	      'email': this.email,
	      'phone': this.phone,
	      'status': this.status
	    });
	}

	ngOnInit() {
		this.contacts = this.storageService.getContacts();
	}

	public saveContact() {
		this.storageService.createContact(this.form.value);
		this.form.reset();
	}

}
