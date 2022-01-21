import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-accordion',
  templateUrl: './mods-accordion.component.html',
  styleUrls: ['./mods-accordion.component.css']
})
export class ModsAccordionComponent implements OnInit {

  currentOpenIndex=0

  @Input() accordionData:{label:string,content:string}[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  onClickLabel(index:number){
    if(index===this.currentOpenIndex){
      this.currentOpenIndex=-1
    }else{
      this.currentOpenIndex=index
    }
    
  }
}
