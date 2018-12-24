import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private renderer: Renderer2) {

  }

  private isOpen = true;

  @Input('appDropdown') element: ElementRef;
  @Input('appClassname') classname = 'collapse';

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.renderer.removeClass(this.element, this.classname);
    } else {
      this.renderer.addClass(this.element, this.classname);
    }
  }


}
