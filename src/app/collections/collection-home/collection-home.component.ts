import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  data=[
    {name:"Arvind R",age:22,job:"Developer"},
    {name:"Zero Kelvin",age:21,job:"Designer"},
    {name:"John Doe",age:26,job:"Engineer"}
  ]

  headers=[
    {name:"name",label:"Name"},
    {name:"age",label:"Age"},
    {name:"job",label:"Job"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
