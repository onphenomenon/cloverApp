import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InventoryGraphComponent } from './inventory-graph/inventory-graph.component';
import { CloverApiService } from './clover-api.service';
import { HttpModule } from '@angular/http';
import { OrderByPipe } from './order-by.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InventoryTableComponent,
    InventoryGraphComponent,
    OrderByPipe,
    ModalComponent
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [CloverApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
