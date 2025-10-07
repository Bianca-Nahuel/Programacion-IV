import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivaPerso]'
})
export class DirectivaPerso {

  @Input() color = "blue"
  constructor(private el: ElementRef,private render: Renderer2) {} 


  @HostListener('mouseenter')
  onEnter(){
    this.render.setStyle(this.el.nativeElement,"color",this.color)
  }

  @HostListener("mouseleave")
  onExist(){
    this.render.removeStyle(this.el.nativeElement,"color")
  }

}
