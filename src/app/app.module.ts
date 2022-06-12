import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactTableComponent } from './components/contact/contact-table/contact-table.component';
import { ContactContainerComponent } from './components/contact/contact-container/contact-container.component';
import { SortableDirective } from './directives/sortable.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalAddContactComponent } from './components/contact/modal-add-contact/modal-add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactTableComponent,
    ContactContainerComponent,
    SortableDirective,
    ModalAddContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
