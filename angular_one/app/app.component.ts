import { Component } from "@angular/core";

@Component({
    selector: 'app',
    template:`<h1>Hello {{name}}!</he>`
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2';
    }
}