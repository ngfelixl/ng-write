import { Component, HostBinding, ChangeDetectionStrategy, Input } from '@angular/core';
import { Code } from '../../models/section-types';

@Component({
  selector: 'docu-code',
  template: `
    <mat-card>
      <mat-card-content>
        <div class="code" [innerHTML]="code?.code | syntaxPipe:code?.language"></div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host, mat-card, mat-card-content, .code {
      width: 100%;
      box-sizing: border-box;
    }
    mat-card {
      margin: 0 auto;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .code {
      font-family: 'Source Code Pro', monospace, roboto, sans-serif;
      padding: 16px;
      white-space: pre;
      overflow-x: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent {
  @HostBinding('class.bg-primary-100') bgPrimary = true;
  @Input() code: Code;
}
