import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
        sagittis tortor. Aliquam lobortis felis eget eros dictum interdum. Sed
        gravida egestas nunc a mollis. Quisque vel ullamcorper diam. Vivamus
        efficitur pulvinar risus vitae imperdiet. Duis pretium erat sed elit
        vestibulum consectetur. Donec sollicitudin arcu nulla, iaculis rutrum
        odio pulvinar vel.
      </p>
    </div>
    <div>
      <input type="text" [(ngModel)]="search" />
      <div *ngIf="search === 'compteur'">
        <p>Compteur : {{ count }} * 2 = {{ count * 2 }}</p>
        <button (click)="increment()">Incrémenter</button>
        <button (click)="pushItem()">Ajouter un item</button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items">
          <td>{{ item }}</td>
          <td>John doe{{ item }}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class AppComponent {
  public search = '';
  public count = 0;
  public items = new Array(10).fill(0).map((v, k) => k);

  public increment() {
    this.count++;
  }

  public pushItem() {
    this.items.push(this.items.length);
  }
}
