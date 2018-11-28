import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'docu-section',
  template: `
    <docu-title *ngIf="section?.type === 'title'">{{section?.content.text}}</docu-title>
    <docu-text *ngIf="section?.type === 'text'" [content]="section?.content"></docu-text>
    <docu-code *ngIf="section?.type === 'code'" [code]="section?.content"></docu-code>
    <docu-citation *ngIf="section?.type === 'citation'">{{section?.content?.text}}</docu-citation>
    <docu-math *ngIf="section?.type === 'math'" [math]="section?.content?.text"></docu-math>
    <docu-tabs *ngIf="section?.type === 'tabs'" [tabs]="section?.content?.documentations"></docu-tabs>
    <docu-accordion *ngIf="section?.type === 'accordion'" [panels]="section?.content?.documentations"></docu-accordion>

    <!--
      <app-image *ngIf="paragraph?.type === 'image'" [url]="paragraph?.content"></app-image>
      <app-tree *ngIf="paragraph?.type === 'tree'" [tree]="paragraph?.content"></app-tree>
    -->
  `,
  styles: [`
    :host { display: block; margin: 0 auto; max-width: 1280px; padding: 16px; box-sizing: border-box; z-index: 1; }
    :host > * { width: 100%; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {
  @Input() section;
}
