import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.css']
})
export class CollectionTableComponent implements OnInit {

  @Input() data:any[]=[]
  @Input() headers:any[]=[] 

  constructor() { }

  ngOnInit(): void {
  }

}
