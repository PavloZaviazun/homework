import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCategoryColor]'
})
export class CategoryColorDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
  elementRef.nativeElement.style.backgroundColor = 'wheat';
  renderer2.setStyle(elementRef.nativeElement, 'border', '1px solid red');
  }

  @HostListener('mouseover')
  changeColor(): void {
    this.elementRef.nativeElement.style.color = 'blue';
  }
}
