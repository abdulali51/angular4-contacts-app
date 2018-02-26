import { Injectable } from '@angular/core';

import { Contact } from './shared/contact';

@Injectable()
export class StorageService {

	private c;
	private d;

	contacts: Contact[] = [
		new Contact(1001,'Virat', 'Kohli', 'vk@gmail.com',9087654321,true),
	    new Contact(1002,'Rohit', 'Sharma', 'rs@gmail.com',9087654321,true),
	    new Contact(1003,'Shikhar', 'Dhawan', 'sd@gmail.com',9087654321,true),
	    new Contact(1004,'Suresh', 'Raina', 'sr@gmail.com',9087654321,true),
	    new Contact(1005,'MS', 'Dhoni', 'msd@gmail.com',9087654321,true),
	    new Contact(1006,'Bhuvneshwar', 'Kumar', 'bk@gmail.com',9087654321,true)
	];

    public createContact(obj : Object) {
    	var l = this.contacts.length + 1;
    	for (var i = 0; i < this.contacts.length; i++) {
    		if(Number(i) == (Number(this.contacts.length) - Number(1))) {
    			var maxId = parseInt(Math.max.apply(Math,this.contacts.map(function(o){return o.id;})) + 1);
    			this.contacts[Number(i)+Number(1)] = new Contact(maxId,obj['firstName'],obj['lastName'],obj['email'],obj['phone'],obj['status']);
    			break;
    		}
    	}
    	this.c = JSON.stringify(this.contacts);
    	localStorage.setItem('contacts',this.c);
    	this.getContacts();
    }

    public getContacts() {
    	this.c = localStorage.getItem('contacts');

    	if (!this.c) {
    		this.c = JSON.stringify(this.contacts);
    		localStorage.setItem('contacts',this.c);
    		return this.contacts;
    	} else {
    		this.contacts = [];
    		this.contacts = JSON.parse(this.c);
    		return this.contacts;
    	}
    }

    public updateContacts(obj : Object) {
    	for (var i = 0; i < this.contacts.length; i++) {
    		if (this.contacts[i].id == obj['id']) {
    			this.contacts[i] = new Contact(obj['id'],obj['firstName'],obj['lastName'],obj['email'],obj['phone'],obj['status']);
    			break;
    		}
    	}
    	this.c = JSON.stringify(this.contacts);
    	localStorage.setItem('contacts',this.c);
    }

    public deleteContacts(obj : Object) {
    	for (var i = 0; i < this.contacts.length; i++) {
    		if (this.contacts[i].id == obj['id']) {
    			this.contacts.splice(i,1);
    			break;
    		}
    	}
    	this.c = JSON.stringify(this.contacts);
    	localStorage.setItem('contacts',this.c);
    	this.getContacts();
    }

    public getContactDetails(id) {
    	this.d = localStorage.getItem('contacts');
    	this.d = JSON.parse(this.d);
    	for (var i = 0; i < this.d.length; i++) {
    		if (this.d[i].id == id) {
    			return this.d[i];
    		}
    	}
    }

  constructor() { }

}
