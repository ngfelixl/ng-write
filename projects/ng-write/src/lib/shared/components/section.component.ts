import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'docu-section',
  template: `
  <ng-container [ngSwitch]="section?.type">
    <docu-title *ngSwitchCase="'title'">{{section?.content.text}}</docu-title>
    <docu-text *ngSwitchCase="'text'" [content]="section?.content"></docu-text>
    <docu-code *ngSwitchCase="'code'" [code]="section?.content"></docu-code>
    <docu-html *ngSwitchCase="'html'" [html]="section?.content"></docu-html>
    <docu-citation *ngSwitchCase="'citation'">{{section?.content?.text}}</docu-citation>
    <docu-math *ngSwitchCase="'math'" [math]="section?.content?.text"></docu-math>
    <docu-tabs *ngSwitchCase="'tabs'" [tabs]="section?.content?.documentations"></docu-tabs>
    <docu-accordion *ngSwitchCase="'accordion'" [panels]="section?.content?.documentations"></docu-accordion>
    <docu-table *ngSwitchCase="'table'" [table]="section?.content"></docu-table>
    <docu-image *ngSwitchCase="'image'" [content]="section?.content"></docu-image>
  </ng-container>
  `,
  styles: [`
    :host {
      display: block;
      margin: 0 auto;
      max-width: 1280px;
      padding: 16px;
      box-sizing: border-box;
      z-index: 1;
    }
    :host > * { width: 100%; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  @Input() section;
}
