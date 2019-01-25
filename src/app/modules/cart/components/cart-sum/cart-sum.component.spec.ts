import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSumComponent } from './cart-sum.component';

describe('CartSumComponent', () => {
  let component: CartSumComponent;
  let fixture: ComponentFixture<CartSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
