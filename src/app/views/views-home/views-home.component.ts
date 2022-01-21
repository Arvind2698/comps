import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  statsList=[
    {
      label:"Favorites",
      count:22
    },
    {
      label:"Page Views",
      count:967
    },
    {
      label:"Users",
      count:30
    }
  ]

  list=[
    {
      url:"https://semantic-ui.com/images/avatar/large/stevie.jpg",
      header:"Stevie Feliciano",
      description:"Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing."
    },
    {
      url:"https://semantic-ui.com/images/avatar/large/veronika.jpg",
      header:"Veronika Ossi",
      description:"Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying."
    },
    {
      url:"https://semantic-ui.com/images/avatar/large/jenny.jpg",
      header:"Jenny Hess",
      description:"Jenny is a student studying Media Management at the New School."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
