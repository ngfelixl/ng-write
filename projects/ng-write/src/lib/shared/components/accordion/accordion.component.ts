import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Documentation } from '../../../models';

@Component({
  selector: 'docu-accordion',
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @Input() panels: Documentation[];

  trackBy(index: number, item: Documentation) {
    return `${index}-${item.title}`;
  }
}
