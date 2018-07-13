import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nested',
    templateUrl: './nested.component.html',
    styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
    first = 'sleeping';
    second = 'bored';
    third = 'standing';

    firstCounter = 0;
    secondCounter = 0;
    thirdCounter = 0;

    constructor() {}

    ngOnInit() {}

    onWake(value: string) {
        this.first = value;
    }

    onWatch(value: string) {
        this.second = value;
    }

    onWalk(value: string) {
        this.third = value;
    }
}
