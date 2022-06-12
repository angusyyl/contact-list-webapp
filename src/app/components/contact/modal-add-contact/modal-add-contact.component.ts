import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-contact',
  templateUrl: './modal-add-contact.component.html',
  styleUrls: ['./modal-add-contact.component.css']
})
export class ModalAddContactComponent implements OnInit {

  isFormSubmitted = false;

  addForm = new FormGroup({
    'firstName': new FormControl(null, Validators.required),
    'lastName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'phone': new FormControl(null, Validators.required)
  });

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.isFormSubmitted = true;

    if (this.addForm.valid) {
      this.activeModal.close(this.addForm.value);
    }
  }
}
