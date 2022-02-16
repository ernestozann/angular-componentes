import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.background = 'papayawhip'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.background = 'green'
  }

  constructor(
    private element: ElementRef
  ) {
    // this.element.nativeElement.style.background = 'gray'
  }

}
