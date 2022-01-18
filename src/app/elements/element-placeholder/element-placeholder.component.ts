import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-element-placeholder',
  templateUrl: './element-placeholder.component.html',
  styleUrls: ['./element-placeholder.component.css']
})
export class ElementPlaceholderComponent implements OnInit {

  @Input() line:number=4;
  @Input() headerPresent:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
