import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CONTACTS as MOCK_CONTACTS } from 'src/app/shared/mock-contacts';

import { ContactTableComponent } from './contact-table.component';

describe('ContactTableComponent', () => {
  let component: ContactTableComponent;
  let fixture: ComponentFixture<ContactTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter the contacts', () => {
    component.filterForm.get('filter')?.setValue('es');
    component.onFilter();
    let filterContacts = [
      {
        firstName: 'Jack',
        lastName: 'JONES',
        email: 'jackjonestest@gmail.com',
        phone: '+44235131565462'
      },
      {
        firstName: 'Ava',
        lastName: 'DAVIES',
        email: 'avadaviestest@gmail.com',
        phone: '+440123456789'
      }]
    expect(component.filteredContacts).toEqual(filterContacts);
  });

  it('should sort the First Name in ascending order', () => {
    component.fullContacts = MOCK_CONTACTS;
    component.onSort({column: 'firstName', direction: 'asc'});
    fixture.detectChanges();
    let firstEntry = fixture.debugElement.nativeElement.querySelector('#contact-table>tbody>tr:nth-child(1)>td:nth-child(1)').innerText;
    let lastEntry = fixture.debugElement.nativeElement.querySelector('#contact-table>tbody>tr:nth-child(5)>td:nth-child(1)').innerText;
    expect(firstEntry === 'Ava' && lastEntry === 'Paul').toBeTruthy();
  });

  it('should sort the First Name in descending order', () => {
    component.fullContacts = MOCK_CONTACTS;
    component.onSort({column: 'firstName', direction: 'desc'});
    fixture.detectChanges();
    let firstEntry = fixture.debugElement.nativeElement.querySelector('#contact-table>tbody>tr:nth-child(1)>td:nth-child(1)').innerText;
    let lastEntry = fixture.debugElement.nativeElement.querySelector('#contact-table>tbody>tr:nth-child(5)>td:nth-child(1)').innerText;
    expect(firstEntry === 'Paul' && lastEntry === 'Ava').toBeTruthy();
  });

  it('should sort the Last Name in ascending order', () => {
    component.fullContacts = MOCK_CONTACTS;
    component.onSort({column: 'lastName', direction: 'asc'});
    fixture.detectChanges();
    let firstEntry = fixture.debugElement.nativeElement.querySelector('#contact-table>tbody>tr:nth-child(1)>td:nth-child(2)').innerText;
    let lastEntry = fixture.debugElement.nativeElement.querySelector('#contact-table>tbody>tr:nth-child(5)>td:nth-child(2)').innerText;
    expect(firstEntry === 'DAVIES' && lastEntry === 'WILLIAMS').toBeTruthy();
  });

  it('should sort the Last Name in descending order', () => {
    component.fullContacts = MOCK_CONTACTS;
    component.onSort({column: 'lastName', direction: 'desc'});
    fixture.detectChanges();
    let firstEntry = fixture.debugElement.nativeElement.querySelector('#contact-table>tbody>tr:nth-child(1)>td:nth-child(2)').innerText;
    let lastEntry = fixture.debugElement.nativeElement.querySelector('#contact-table>tbody>tr:nth-child(5)>td:nth-child(2)').innerText;
    expect(firstEntry === 'WILLIAMS' && lastEntry === 'DAVIES').toBeTruthy();
  });
});
