import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent implements OnInit {
  @Input() headerText: string;

  constructor() { }

  ngOnInit() {
  }

}
