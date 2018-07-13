import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
    @Input() counter;
    @Output() walkEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  walk() {
    this.walkEvent.emit('walking');
  }

}
