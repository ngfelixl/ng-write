import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Documentation } from '../../models';

@Component({
  selector: 'docu-accordion',
  template: `
    <mat-accordion>
      <mat-expansion-panel *ngFor="let panel of panels">
        <mat-expansion-panel-header><mat-panel-title>{{panel.title}}</mat-panel-title></mat-expansion-panel-header>
        <docu-container [documentation]="panel"></docu-container>
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @Input() panels: Documentation[];
}
