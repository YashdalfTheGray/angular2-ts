/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, ngFor, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    directives: [ngFor],
    template: `
    <ul>
        <li *ng-for="#name of names"><h1>Hello {{name}}</h1></li>
    </ul>
`
})
class myAppComponent {
    names: Array<string>;

    constructor() {
        this.names = ['Alice', 'Bob', 'Charlie', 'Dave'];
    }
}

bootstrap(myAppComponent);