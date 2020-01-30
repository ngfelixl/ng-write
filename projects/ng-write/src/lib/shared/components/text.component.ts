import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'docu-text',
  template: `<section [innerHTML]="content?.text | textPipe"></section>`,
  styles: [`
    :host { line-height: 30px; font-size: 18px; white-space: pre-wrap; word-wrap:break-word; vertical-align: middle; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent {
  @Input() content;
}
