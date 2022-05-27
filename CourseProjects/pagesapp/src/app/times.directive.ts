import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appTimes]",
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef, //it's a ref to an element that we applied our directive to (in our case it's a reference to <ul></ul>)
    private templateRef: TemplateRef<any> //it's a ref to an element inside an element that we apply our directive to (<li></li>)
  ) {}

  @Input("appTimes") set render(times: number) {
    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
      });
    }
  }
}
