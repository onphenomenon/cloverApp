import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGraphComponent } from './inventory-graph.component';

describe('InventoryGraphComponent', () => {
  let component: InventoryGraphComponent;
  let fixture: ComponentFixture<InventoryGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
