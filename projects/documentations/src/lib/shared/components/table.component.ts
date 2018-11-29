import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Table } from '../../models/section-types';

@Component({
  selector: 'docu-table',
  template: `
    <div class="row" *ngFor="let row of table?.rows; even as isEven; first as isFirst; last as isLast"
      [class.even]="isEven"
      [class.first]="isFirst"
      [class.last]="isLast">
      <div class="col" *ngFor="let col of row.cols" [innerHTML]="col | textPipe">
      </div>
    </div>
  `,
  styles: [`
    :host { width: 100%; }
    .row { display: flex; }
    .row.even { background-color: #eee; }
    .col { flex: 1; padding: 12px; border: 1px solid #ddd; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() table: Table;
}
