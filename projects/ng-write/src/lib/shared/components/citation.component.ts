import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'docu-citation',
  template: `<ng-content></ng-content>`,
  styles: [`
  :host {
    display: block;
    border-left: 4px solid black;
    font-style: italic;
    padding: 24px;
    line-height: 32px;
    font-size: 18px;
    white-space: pre-wrap;
    box-sizing: border-box;
    font-family: "Times New Roman", Times, serif }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitationComponent {}
