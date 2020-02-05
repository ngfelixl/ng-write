import { Component, Input, HostBinding } from '@angular/core';
import { Html } from '../../../models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'docu-html',
  template: ''
})
export class HtmlComponent {
  @Input() html: Html;

  constructor(private domSanitizer: DomSanitizer) {}

  @HostBinding('innerHTML')
  get sanitizedHtml() {
    return this.domSanitizer.bypassSecurityTrustHtml(this.html.text);
  }
}
