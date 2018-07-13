import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';

  links = [
        {
            text: 'Simple Component Example',
            link: 'simple'
        },
        {
            text: 'Nested Component Example',
            link: 'nested'
        },
        {
            text: 'Http Example',
            link: 'http'
        }
    ];
}
