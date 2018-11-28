import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { syntaxRules } from './syntax-rules';

@Pipe({ name: 'syntaxPipe' })
export class SyntaxPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(code: string, language?: string) {
    const lang = syntaxRules.find(o => o.lang === language);
    if (lang && code) {

      // Keywords
      for (const rule of Object.entries(lang.keywords)) {
        const regexp = new RegExp(`\\b${rule[0]}\\b`, 'g');
        code = code.replace(regexp, `\<span style="color: ${rule[1]};"\>$&\<\/span\>`);
      }

      // Comments
      const commentsRegexp = new RegExp(/(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(&lt;![--\s\w\>\/]*&gt;)/g);
      code = code.replace(commentsRegexp, `\<span style="color: ${lang.comments}"\>$&\<\/span\>`);

      // Strings
      const stringsRegexp = new RegExp(/(\`[\s\S]*\`)|(&#039;(.*?)(&#039;\n\r))|(&quot;(.*?)&quot;)/g);
      code = code.replace(stringsRegexp, `\<span style="color: ${lang.strings}"\>$&\<\/span\>`);

      // Decorators
      if (language === 'typescript' && lang.decorators) {
        const decoratorsRegexp = new RegExp(/([\r\n]@[a-zA-Z]+)[^\(]+/g);
        code = code.replace(decoratorsRegexp, `\<span style="color: ${lang.decorators}"\>$&\<\/span\>`);
      }

      if (language === 'html') {
        const tagsRegexp = new RegExp(/(&lt;\/?[a-zA-Z]+\ ?.*&gt;)/g);
        code = code.replace(tagsRegexp, `\<span style="color: #ff0000"\>$&\<\/span\>`);
      }

      return this.sanitizer.bypassSecurityTrustHtml(code);
    } else {
      return `${code}`;
    }
  }
}

/* function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
} */

