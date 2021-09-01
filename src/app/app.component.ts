import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello world</h1>
    <div *ngIf="search === 'foo'">Lorem ipsum dolor sit amet</div>
    <p>{{ value }}</p>
  `,
})
export class AppComponent {
  public search = '';
  public value = 'Value';
}
