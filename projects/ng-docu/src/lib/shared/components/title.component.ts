import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'docu-title',
  template: `
    <h2><ng-content></ng-content></h2>
  `,
  styles: [`h2 { margin: 0; font-weight: bold; }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {}
