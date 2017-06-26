import { Component, OnInit } from '@angular/core';
import { CloverApiService } from './clover-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  inventoryData: Array<any>;
  errorMessage;
  ascNum = true;
  ascName = true;

  constructor(private cloverApiService: CloverApiService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.cloverApiService.getItems().subscribe(
      (items) => {
        console.log("ITEMS: ", items.elements)
        if (items.elements.length === 0) {
          this.inventoryData = [];
        } else {
          this.inventoryData = [];
          this.inventoryData = items.elements;
          this.inventoryData.forEach(function (item) {
            item["stockCount"] = Math.floor(Math.random() * 30) + 1;
          })

        }
      },
      error => this.errorMessage = <any>error
    )
  }
  updateItems(item) {
    if (item.id) {
      this.cloverApiService.editItem(item).subscribe(
        (items) => {
          this.getItems();
        },
        error => this.errorMessage = <any>error
      )
    } else {
      this.cloverApiService.createItem(item).subscribe(
        (items) => {
          this.getItems();
        },
        error => this.errorMessage = <any>error
      )
    }

  }

  deleteItem(item) {
    this.cloverApiService.deleteItem(item).subscribe(
      (data) => {
        this.getItems();
      },
      error => this.errorMessage = <any>error
    )
  }

  sortItems(type) {
    console.log("TYPE: ", type, this.ascName, this.ascNum)
    if (type === 'name') {
      this.ascName = !this.ascName;
      return !this.ascName? this.sortAsc(this.inventoryData, type): this.sortDsc(this.inventoryData, type);
    } else if (type === 'stockCount') {
      this.ascNum = !this.ascNum;
      return !this.ascNum? this.sortAsc(this.inventoryData, type): this.sortDsc(this.inventoryData, type);
    } else {
      return;
    }
  }
  sortAsc(array, type) {
    array.sort(function (a, b) {
      if (a[type] < b[type]) return -1;
      if (a[type] > b[type]) return 1;
      return 0;
    })
  }
  sortDsc(array, type) {
    array.sort(function (a, b) {
        if (a[type] < b[type]) return 1;
        if (a[type] > b[type]) return -1;
        return 0;
      })
  }





}
