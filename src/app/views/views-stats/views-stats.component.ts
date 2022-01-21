import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-views-stats',
  templateUrl: './views-stats.component.html',
  styleUrls: ['./views-stats.component.css']
})
export class ViewsStatsComponent implements OnInit {

  @Input() statsList:{label:String,count:number}[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
