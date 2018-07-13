import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    @Input() counter;

    @Output() watch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  watchTv() {
      this.watch.emit('watching tv');
  }

}
