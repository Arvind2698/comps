import { Directive,Input,ViewContainerRef,TemplateRef } from '@angular/core';

@Directive({
  selector: '[appPrintLines]'
})
export class PrintLinesDirective {

  constructor(private viewContainerRef:ViewContainerRef, private templateRef:TemplateRef<any>) { }

  @Input("appPrintLines")
  set render(lines:number){
    this.viewContainerRef.clear()
    for(let i=0;i<lines;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef,{
        index:i
      })
    }
  }

}