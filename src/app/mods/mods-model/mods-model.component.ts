import { Component, OnInit,ElementRef ,OnDestroy, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mods-model',
  templateUrl: './mods-model.component.html',
  styleUrls: ['./mods-model.component.css']
})
export class ModsModelComponent implements OnInit,OnDestroy {

  @Output() close=new EventEmitter()

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    console.log(this.elementRef)
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove()
  }

  onCloseClick(){
    this.close.emit()
  }

}
