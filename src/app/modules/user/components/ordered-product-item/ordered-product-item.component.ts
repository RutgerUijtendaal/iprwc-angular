import {Component, Input, OnInit} from '@angular/core';
import {OrderedProduct} from '@shared/models/ordered-product.model';

@Component({
  selector: 'app-ordered-product-item',
  templateUrl: './ordered-product-item.component.html',
  styleUrls: ['./ordered-product-item.component.scss']
})
export class OrderedProductItemComponent implements OnInit {
  @Input() orderedProduct: OrderedProduct;

  constructor() { }

  ngOnInit() {
  }

}
