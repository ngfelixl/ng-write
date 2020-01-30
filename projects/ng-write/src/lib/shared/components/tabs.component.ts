import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Documentation } from '../../models';

@Component({
  selector: 'docu-tabs',
  template: `
    <mat-card class="tab-card">
      <mat-card-content>
        <mat-tab-group>
          <mat-tab *ngFor="let tab of tabs">
            <ng-template mat-tab-label>{{tab.title}}</ng-template>
            <docu-container [documentation]="tab"></docu-container>
          </mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .tab-card { padding: 0px; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  @Input() tabs: Documentation[];
}
