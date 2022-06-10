import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  contacts: Contact[] = [
    {
      id: 1,
      firstName: 'Paul',
      lastName: 'SMITH',
      email: 'paulsmithtest@gmail.com',
      phone: '+440123456789'
    },
    {
      id: 2,
      firstName: 'Jack',
      lastName: 'JONES',
      email: 'jackjonestest@gmail.com',
      phone: '+44235131565462'
    },
    {
      id: 3,
      firstName: 'Ava',
      lastName: 'DAVIES',
      email: 'avadaviestest@gmail.com',
      phone: '+440123456789'
    },
    {
      id: 4,
      firstName: 'Hong',
      lastName: 'WILLIAMS',
      email: 'hongwilliamstest@gmail.com',
      phone: '+443212135154'
    },
    {
      id: 5,
      firstName: 'Ellie',
      lastName: 'TAYLOR',
      email: 'ellietaylortest@gmail.com',
      phone: '+440203484512'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
