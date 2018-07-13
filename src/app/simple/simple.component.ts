import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

    counter = 0;
    display = true;

  constructor() { }

  ngOnInit() {
  }

  incrementCounter() {
      this.counter += 1;
  }

}
