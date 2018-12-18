import { TextPipe } from '../pipes/text.pipe';

describe('TextPipe', () => {
  let mockDomSanitizer;

  beforeEach(() => {
    mockDomSanitizer = jasmine.createSpyObj(['bypassSecurityTrustHtml']);
    mockDomSanitizer.bypassSecurityTrustHtml.and.callFake((output: string) => output);
  });

  it('should display text in ** as bold', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello **bold** hallo')).toEqual('hello <b>bold</b> hallo');
  });

  it('should display multiple bold (**) seperated from each other', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello **bold** world **bold**')).toEqual('hello <b>bold</b> world <b>bold</b>');
  });

  it('should display text in ** as bold over multiple lines', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform(`hello **bold
world** hallo`)).toEqual(`hello <b>bold
world</b> hallo`);
  });

  it('should display single itallic (*) as itallic', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello *itallic* hallo')).toEqual('hello <i>itallic</i> hallo');
  });

  it('should display multiple itallic (*) seperated from each other', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello *itallic* world *itallic*')).toEqual('hello <i>itallic</i> world <i>itallic</i>');
  });

  it('should display text in * as itallic over multiple lines', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello *itallic* hallo')).toEqual('hello <i>itallic</i> hallo');
  });

  it('should display text in * as itallic over multiple lines', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform(`hello *itallic
world* hallo`)).toEqual(`hello <i>itallic
world</i> hallo`);
  });

  it('should display itallic in bold text', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello **I am *itallic*, cool **')).toEqual('hello <b>I am <i>itallic</i>, cool </b>');
  });

  it('should display code in span with style', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello \`I am code\`, cool'))
      .toEqual('hello \<code style="background-color: #eceff1; border-radius: 8px; padding: 4px;"\>I am code\<\/code\>, cool');
  });

  it('should display code in span with style', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello \`I am code\`, cool'))
      .toEqual('hello \<code style="background-color: #eceff1; border-radius: 8px; padding: 4px;"\>I am code\<\/code\>, cool');
  });

  it('should display links', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello [linktext](url), cool'))
      .toEqual('hello \<a target="_blank" href="url"\>linktext\<\/a\>, cool');
  });

  it('should display inline-images', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello ![Alttext](imgUrl), cool'))
      .toEqual('hello \<img src="imgUrl" alt="Alttext"\>, cool');
  });

  it('should display a linked image', () => {
    const pipe = new TextPipe(mockDomSanitizer);

    expect(pipe.transform('hello [![Alttext](imgUrl)](linkUrl), cool'))
      .toEqual('hello \<a target="_blank" href="linkUrl"\>\<img src="imgUrl" alt="Alttext"\>\<\/a\>, cool');
  });
});
