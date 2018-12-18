import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Table } from '../../models/section-types';

@Component({
  selector: 'docu-table',
  template: `
    <figure>
      <mat-card>
        <mat-card-content>
          <table>
            <tr *ngFor="let row of table?.rows; even as isEven;" [class.even]="isEven">
              <td *ngFor="let col of row.cols" [innerHTML]="col | textPipe"></td>
            </tr>
          </table>
        </mat-card-content>
      </mat-card>
      <figcaption *ngIf="table?.caption"><b>Table:</b> {{table.caption}}</figcaption>
    </figure>
  `,
  styles: [`
    :host { width: 100%; }
    mat-card { display: block; padding: 0; margin-bottom: 8px; }
    .even { background-color: #eee; }
    mat-card, mat-card-content { max-width: 100%; }
    table {
      max-width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      border-radius: 4px;
    }
    td { padding: 12px; 1px solid #ddd; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() table: Table;
}
