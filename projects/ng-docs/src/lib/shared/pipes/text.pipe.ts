import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'textPipe' })
export class TextPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string) {
    if (text) {
      const boldRegexp = new RegExp(/\*\*([\s\S]*?)\*\*/gm);
      // const boldRegexp = new RegExp(/\*\*(\S(.*?\S)?)\*\*/gm);
      text = text.replace(boldRegexp, `\<b\>$&\<\/b\>`);
      text = text.replace(new RegExp(/\*\*/g), '');

      const itallicRegexp = new RegExp(/\*([^\[]*?)\*/gm);
      // const itallicRegexp = new RegExp(/[^\\]\*(\S(.*?\S)?)\*/gm);
      text = text.replace(itallicRegexp, `\<i\>$&\<\/i\>`);
      text = text.replace(new RegExp(/\*/g), '');

      const codeRegexp = new RegExp(/\`(\S(.*?\S)?)\`/gm);
      text = text.replace(codeRegexp, `\<code style="background-color: #eceff1; border-radius: 8px; padding: 4px;"\>$&\<\/code\>`);
      text = text.replace(new RegExp(/\`/g), '');

      const imageRegexp = new RegExp(/\!\[([^\[\]]+)\]\(([^\(\)]+)\)/gm);
      text = text.replace(imageRegexp, `\<img src="$2" alt="$1"\>`);

      const linkRegexp = new RegExp(/([^\!]{1})\[([^\[]+)\]\(([^\)]+)\)/gm);
      text = text.replace(linkRegexp, `$1\<a target="_blank" href="$3"\>$2\<\/a\>`);
    }

    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
