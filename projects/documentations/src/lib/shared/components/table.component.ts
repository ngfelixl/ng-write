import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Table } from '../../models/section-types';

@Component({
  selector: 'docu-table',
  template: `
    <figure>
      <mat-card>
        <mat-card-content>
          <div class="row" *ngFor="let row of table?.rows; even as isEven; first as isFirst; last as isLast"
            [class.even]="isEven"
            [class.first]="isFirst"
            [class.last]="isLast">
            <div class="col" *ngFor="let col of row.cols" [innerHTML]="col | textPipe">
            </div>
          </div>
        </mat-card-content>
      </mat-card>
      <figcaption *ngIf="table?.caption"><b>Table:</b> {{table.caption}}</figcaption>
    </figure>
  `,
  styles: [`
    :host { width: 100%; }
    mat-card { padding: 0; margin-bottom: 8px; }
    .row { display: flex; }
    .row.even { background-color: #eee; }
    .col { flex: 1; padding: 12px; border: 1px solid #ddd; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() table: Table;
}
