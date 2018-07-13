import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    title = 'Home';

    links = [
        {
            text: 'Simple Component Example',
            link: 'simple'
        },
        {
            text: 'Nested Component Example',
            link: 'nested'
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
