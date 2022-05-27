import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
    //app-modal component will be displayed directly inside a body, not inside a mods-home-component
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onCloseClick(): void {
    this.close.emit();
  }
}
