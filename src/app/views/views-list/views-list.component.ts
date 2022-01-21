import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-views-list',
  templateUrl: './views-list.component.html',
  styleUrls: ['./views-list.component.css']
})
export class ViewsListComponent implements OnInit {

  @Input() list:{url:string,header:string,description:string}[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
