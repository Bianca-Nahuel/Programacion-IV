import { Directive, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNuevaDirectiva]'
})
export class NuevaDirectiva {
  @Input() color = "yellow"  

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    this.renderer.removeStyle(this.el.nativeElement, 'cursor');
  }

}


@Directive({
  selector: '[appIfAdmin]',
  standalone: true
})
export class IfAdminDirective {
  @Input() set appIfAdmin(cond: boolean) {
    this.view.clear();
    if (cond) {
      this.view.createEmbeddedView(this.tpl);
    }
  }

  constructor(
    private tpl: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}
}
