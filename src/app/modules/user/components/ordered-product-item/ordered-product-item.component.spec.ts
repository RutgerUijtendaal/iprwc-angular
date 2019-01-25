import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedProductItemComponent } from './ordered-product-item.component';

describe('OrderedProductItemComponent', () => {
  let component: OrderedProductItemComponent;
  let fixture: ComponentFixture<OrderedProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
