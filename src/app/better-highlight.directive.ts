import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'red';
  @HostBinding('style.backgroundColor') backgroundColor: String =
    this.defaultColor;

  constructor(private renderer: Renderer2, private elref: ElementRef) {}

  ngOnInit(): void {
    //this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') mourseover(eventData: Event) {
    //this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elref.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }
}
