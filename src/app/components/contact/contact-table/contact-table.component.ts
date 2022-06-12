import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SortableDirective, SortColumn, SortDirection } from 'src/app/directives/sortable.directive';
import { SortEvent } from 'src/app/interfaces/sort-event';
import { CONTACTS } from 'src/app/shared/mock-contacts';
import { CommonService } from 'src/app/shared/utils/common.service';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddContactComponent } from '../modal-add-contact/modal-add-contact.component';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
  faFilter = faFilter;

  // full list of contacts without filtering
  fullContacts = CONTACTS;
  // filtered contacts to display
  filteredContacts = CONTACTS;
  // current column being sorted
  sortedCol: SortColumn = '';
  // current state of sorted direction
  sortedDir: SortDirection = '';
  // current state of filtering
  isFilterOn = false;

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective> | undefined;

  filterForm = new FormGroup({
    "filter": new FormControl(null)
  });

  constructor(private commonService: CommonService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  /**
   * An event handler to sort the clicked table headers.
   * @param param0
   */
  onSort({ column, direction }: SortEvent) {
    this.sortedCol = column;
    this.sortedDir = direction;

    // resetting other headers
    this.headers!.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting contacts
    if (direction === '' || column === '') {
      if (this.isFilterOn) {
        const filterVal = this.filterForm.get('filter')!.value;
        this.filterContacts(filterVal);
      } else {
        this.filteredContacts = this.fullContacts;
      }
    } else {
      this.filteredContacts = [...(this.isFilterOn ? this.filteredContacts : this.fullContacts)].sort((a, b) => {
        const res = this.commonService.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  /**
   * Show the contacts that have a Last name that contain the text on the filter input.
   * @param filterVal input text to filter on the Last Name column
   */
  filterContacts(filterVal: string): void {
    this.filteredContacts = filterVal ? this.fullContacts.filter(contact => contact.lastName.toUpperCase().includes(filterVal.toUpperCase())) : this.fullContacts;
  }

  /**
   * An event handler to filter shown contacts when clicked the filter button.
   */
  onFilter() {
    this.isFilterOn = true;
    const filterVal = this.filterForm.get('filter')!.value;
    this.filterContacts(filterVal);
    this.onSort({ column: this.sortedCol, direction: this.sortedDir });
  }

  /**
   * An event handler to clear filtering when clicked the Clear Filter button.
   */
  onClear() {
    // reset the filter state
    this.isFilterOn = false;
    // reset the filter input text
    this.filterForm.reset();
    this.filteredContacts = this.fullContacts;
    this.onSort({ column: this.sortedCol, direction: this.sortedDir });
  }

  /**
   * An event handler to open a modal to add new contact when clicked Add contact button.
   */
  onOpenModal() {
    const modalRef = this.modalService.open(ModalAddContactComponent, { centered: true });
    modalRef.result.then(
      (result: { firstName: string, lastName: string, email: string, phone: string }) => {
        this.fullContacts.push({ 'firstName': result.firstName, lastName: result.lastName, email: result.email, phone: result.phone })
        if (this.isFilterOn) {
          // keep the filtered and sorted state
          this.onFilter();
        } else {
          // keep the sorted state
          this.onSort({ column: this.sortedCol, direction: this.sortedDir });
        }
      }
      , _ => ''
    );
  }
}
