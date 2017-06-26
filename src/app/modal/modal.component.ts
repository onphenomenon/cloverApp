import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CloverApiService } from '../clover-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() name;
  errorMessage;
  constructor(public activeModal: NgbActiveModal, private cloverApiService: CloverApiService) { }

  ngOnInit() {
  }

  updateItem(item) {
    // if (item.id) {
    //   this.cloverApiService.editItem(item).subscribe(
    //     (items) => {
    //       console.log("ITEMS: ", items.elements)

    //     },
    //     error => this.errorMessage = <any>error
    //   )
    // } else {
    //   this.cloverApiService.createItem(item).subscribe(
    //     (items) => {
    //       console.log("ITEMS: ", items.elements);
    //     },
    //     error => this.errorMessage = <any>error
    //   )
    // }

  }

}
