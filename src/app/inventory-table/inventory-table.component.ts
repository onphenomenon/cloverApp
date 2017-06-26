import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {
  @Input() inventoryItems: Array<any>;
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() sort = new EventEmitter<any>();
  orderByModel = "name";
  closeResult: string;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  mySort(type) {
    this.sort.emit(type)
  }
  openDelete(item) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.modalType = "";
    modalRef.componentInstance.editType = "Delete";
    modalRef.result.then((data) => {
      console.log("DATAL ", data);
      if(data !== 'Cancel'){
        this.delete.emit(data)
      }
    }, (reason) => {
      // on dismiss
    });
  }

  openEdit(item) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.item = item;
    modalRef.componentInstance.modalType = "Edit Item";
    modalRef.componentInstance.editType = "Save";
    modalRef.result.then((data) => {
      console.log("DATAL ", data);
      if(data !== 'Cancel'){
        this.update.emit(data)
      }
    }, (reason) => {
      // on dismiss
    });
  }

  openNew() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.item = {
      name: "",
      price: "3000"
    };
    modalRef.componentInstance.modalType = "Add New Item";
    modalRef.componentInstance.editType = "Add";
    modalRef.result.then((data) => {
      console.log("DATAL ", data);
      if(data !== 'Cancel'){
        this.update.emit(data)
      }
    }, (reason) => {
      // on dismiss
    });
  }

}
