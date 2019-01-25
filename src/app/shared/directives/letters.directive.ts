import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[letters]'
})
export class Letters {

  constructor(public el: ElementRef) {

    this.el.nativeElement.onkeypress = (evt) => {
      if (evt.which < 65 || evt.which > 122) {
        evt.preventDefault();
      }
    };

  }
}
