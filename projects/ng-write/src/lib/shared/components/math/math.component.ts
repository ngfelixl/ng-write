import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { renderToString } from 'katex';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'docu-math',
  template: `<div [innerHTML]="expression"></div>`,
  styleUrls: ['./math.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MathComponent {
  @Input() math: string;

  constructor(private sanitizer: DomSanitizer) {}

  get expression(): SafeHtml {
    try {
      return this.sanitizer.bypassSecurityTrustHtml(renderToString(this.math));
    } catch (e) {
      return '';
    }
  }
}
