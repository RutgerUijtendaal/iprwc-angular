import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedProductItemDeckComponent } from './ordered-product-item-deck.component';

describe('OrderedProductItemDeckComponent', () => {
  let component: OrderedProductItemDeckComponent;
  let fixture: ComponentFixture<OrderedProductItemDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedProductItemDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedProductItemDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
