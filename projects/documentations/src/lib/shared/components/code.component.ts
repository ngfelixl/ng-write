import { Component, HostBinding, ChangeDetectionStrategy, Input } from '@angular/core';
import { Code } from '../../models/section-types';

@Component({
  selector: 'docu-code',
  template: `
    <figure>
      <mat-card>
        <mat-card-content>
          <code [innerHTML]="code?.code | syntaxPipe:code?.language"></code>
        </mat-card-content>
      </mat-card>
      <figcaption *ngIf="code?.caption"><b>Listing:</b> {{code.caption}}</figcaption>
    </figure>
  `,
  styles: [`
    :host, mat-card, mat-card-content, code {
      width: 100%;
      box-sizing: border-box;
    }
    mat-card {
      margin: 0 auto 8px auto;
      background-color: rgba(0, 0, 0, 0.2);
    }
    code {
      display: block;
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
