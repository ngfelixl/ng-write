import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { renderToString } from 'katex';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'docu-math',
  template: `<div [innerHTML]="expression"></div>`,
  styles: [`
    :host { display: block; overflow-x: auto; font-size: 18px; }
    :host /deep/ .katex-mathml { position: fixed; }
    div { display: block; padding: 8px 0; text-align: center; white-space: nowrap; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MathComponent {
  @Input() math: string;

  constructor(private sanitizer: DomSanitizer) {}

  get expression(): SafeHtml {
    try {
      // return renderToString(this.math);
      return this.sanitizer.bypassSecurityTrustHtml(renderToString(this.math));
    } catch (e) {
      return '';
    }
  }
}
