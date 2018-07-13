import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
    @Input() counter;
    @Output() wake = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  wakeUp() {
      this.wake.emit('awake');
      console.log('wake');
  }

}
