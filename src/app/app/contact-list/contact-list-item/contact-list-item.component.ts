import { 
	Component, 
	OnInit, 
	Input, 
	ViewContainerRef, 
	ChangeDetectionStrategy, 
	ChangeDetectorRef } from '@angular/core';

import { Contact } from '../../shared/contact';

import { MdlDialogService, MdlDialogReference } from "@angular-mdl/core";

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { StorageService } from '../../storage-service.service';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  selector: 'app-contact-list-item',
  providers: [StorageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})

export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;

  public form: FormGroup;
  public id = new FormControl();
  public firstName = new FormControl();
  public lastName = new FormControl('', Validators.required);
  public email = new FormControl('', emailValidator);
  public phone = new FormControl('');
  public status = new FormControl('');

  constructor(private fb: FormBuilder,private storageService: StorageService,private cd: ChangeDetectorRef) {
    this.form = fb.group({
      'id' : this.id,
      'firstName': this.firstName,
      'lastName': this.lastName,
      'email': this.email,
      'phone': this.phone,
      'status': this.status
    });
  }

  public onSubmit() {
    this.storageService.updateContacts(this.form.value);
  }
  
  public onDelete(contact : object) {
    this.storageService.deleteContacts(this.contact);
    this.cd.markForCheck();
  }

  ngOnInit() {}

  public onDialogHide() {
  	this.storageService.getContacts();
  }

}
