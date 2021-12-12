import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Documentation } from '../../models';

@Component({
  selector: 'docu-container',
  template: `
    <docu-section *ngFor="let section of documentation?.sections; trackBy: trackByIndex" [section]="section"></docu-section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  @Input() documentation: Documentation;

  trackByIndex(index: number) {
    return index;
  }
}
