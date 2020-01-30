import { ComponentFixture } from '@angular/core/testing';
import { SyntaxPipe } from '../pipes/syntax.pipe';
import { colors } from '../pipes/syntax-rules/colors';
import { typescript } from '../pipes/syntax-rules/typescript';

describe('SyntaxPipe', () => {
  let mockDomSanitizer;

  beforeEach(() => {
    mockDomSanitizer = jasmine.createSpyObj(['bypassSecurityTrustHtml']);
    mockDomSanitizer.bypassSecurityTrustHtml.and.callFake((output: string) => output);
  });

  describe('for Typescript', () => {
    it('should display "from" in purple and "constructor" in blue', () => {
      const pipe = new SyntaxPipe(mockDomSanitizer);

      expect(pipe.transform('hello constructor', 'typescript'))
        .toEqual(`hello <span style="color: ${colors.blue};">constructor</span>`);
      expect(pipe.transform('where are you from', 'typescript'))
        .toEqual(`where are you <span style="color: ${colors.purple};">from</span>`);
    });

    it('should colorize decorator names', () => {
      const pipe = new SyntaxPipe(mockDomSanitizer);

      expect(pipe.transform('@Component() class', 'typescript'))
        .toEqual(`<span style="color: ${typescript.decorators};">@Component</span>() <span style="color: ${colors.blue};">class</span>`);
    });
  });
});
