import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 3; i++) {
      this.items.push(i);
    }
  }

}
