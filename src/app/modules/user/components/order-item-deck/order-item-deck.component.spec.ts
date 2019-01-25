import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemDeckComponent } from './order-item-deck.component';

describe('OrderItemDeckComponent', () => {
  let component: OrderItemDeckComponent;
  let fixture: ComponentFixture<OrderItemDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
