import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

    counter = 0;
    display = true;
    array = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

  incrementCounter() {
      this.counter = this.counter + 1;
  }

}
