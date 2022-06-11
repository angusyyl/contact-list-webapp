import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SortableDirective } from 'src/app/directives/sortable.directive';
import { SortEvent } from 'src/app/interfaces/sort-event';
import { CONTACTS } from 'src/app/shared/mock-contacts';
import { CommonService } from 'src/app/shared/utils/common.service';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
  faFilter = faFilter;

  contacts = CONTACTS;
  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective> | undefined;

  filterForm = new FormGroup({
    "filter": new FormControl(null)
  });

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onSort({ column, direction }: SortEvent) {

    // resetting other headers
    this.headers!.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting contacts
    if (direction === '' || column === '') {
      this.contacts = CONTACTS;
    } else {
      this.contacts = [...CONTACTS].sort((a, b) => {
        const res = this.commonService.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  onFilter() {
    const filterVal = this.filterForm.get('filter')!.value;
    this.contacts = filterVal ? CONTACTS.filter(contact => contact.lastName.includes(this.filterForm.get('filter')!.value)) : CONTACTS;
  }

  onClear() {
    this.filterForm.reset();
    this.onFilter();
  }
}
