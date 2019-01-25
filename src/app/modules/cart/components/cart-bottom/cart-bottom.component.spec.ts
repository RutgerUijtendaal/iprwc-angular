import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBottomComponent } from './cart-bottom.component';

describe('CartBottomComponent', () => {
  let component: CartBottomComponent;
  let fixture: ComponentFixture<CartBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
