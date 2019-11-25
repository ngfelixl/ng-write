import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'docu-code-form',
  templateUrl: './code-form.component.html',
  styles: [`
    .code-form { display: flex; flex-direction: column; }
    .language { flex: 0 0 auto; }
    .code { flex: 1 1 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeFormComponent {
  @Input() form;
}
