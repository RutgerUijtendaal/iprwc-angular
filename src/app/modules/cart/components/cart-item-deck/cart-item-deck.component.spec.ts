import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemDeckComponent } from './cart-item-deck.component';

describe('CartItemDeckComponent', () => {
  let component: CartItemDeckComponent;
  let fixture: ComponentFixture<CartItemDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
