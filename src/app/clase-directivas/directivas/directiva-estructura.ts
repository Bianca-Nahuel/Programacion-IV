import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectivaEstructura]'
})
export class DirectivaEstructura {
  @Input('appDirectivaEstructura') set isAdmin(admin:boolean){
    if(admin){
      this.view.createEmbeddedView(this.tpl)
    }else{
      this.view.clear()
    }

  }

  constructor(private tpl: TemplateRef<any>, private view: ViewContainerRef) {}

}
