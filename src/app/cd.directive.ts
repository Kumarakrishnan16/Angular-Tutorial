import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appCd]'
})
export class CdDirective {

  constructor( private el:ElementRef) { }

    // When mouse enters
  @HostListener('mouseenter') 
  onMouseEnter() {
    this.highlight('yellow');
  }

  // When mouse leaves
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

