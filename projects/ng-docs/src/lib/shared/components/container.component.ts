import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Documentation } from '../../models';

@Component({
  selector: 'docu-container',
  template: `
    <docu-section *ngFor="let section of documentation?.sections" [section]="section"></docu-section>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent {
  @Input() documentation: Documentation;
}
