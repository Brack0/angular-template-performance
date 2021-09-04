import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  template: `
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyTableComponent {
  @Input()
  public items: number[] = [];
}
