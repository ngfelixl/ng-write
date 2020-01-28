import { Component, HostBinding, ChangeDetectionStrategy, Input } from '@angular/core';
import { Code } from '../../../models';

@Component({
  selector: 'docu-code',
  templateUrl: './code.component.html',
  styleUrls: [ './code.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent {
  @HostBinding('class.bg-primary-100') bgPrimary = true;
  @Input() code: Code;
  @Input() mode: 'light' | 'dark' = 'light';
}
