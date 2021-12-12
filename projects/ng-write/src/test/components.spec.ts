import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from '../lib/shared/components/section.component';
import { CodeComponent } from '../lib/shared/components/code/code.component';
import { TextComponent } from '../lib/shared/components/text.component';
import { TitleComponent } from '../lib/shared/components/title.component';
import { SyntaxPipe } from '../lib/shared/pipes/syntax.pipe';
import { TextPipe } from '../lib/shared/pipes/text.pipe';
import { AccordionComponent } from '../lib/shared/components/accordion/accordion.component';
import { CitationComponent } from '../lib/shared/components/citation.component';
import { ContainerComponent } from '../lib/shared/components/container.component';
import { MathComponent } from '../lib/shared/components/math/math.component';
import { TabsComponent } from '../lib/shared/components/tabs.component';
import { MaterialModule } from '../lib/shared/material.module';
import { TableComponent } from '../lib/shared/components/table.component';
import { ImageComponent } from '../lib/shared/components/image.component';
import { HtmlComponent } from '../lib/shared/components/html/html.component';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      MaterialModule
    ],
    declarations: [
      ContainerComponent,
      AccordionComponent,
      CitationComponent,
      SectionComponent,
      CodeComponent,
      MathComponent,
      HtmlComponent,
      TextComponent,
      TitleComponent,
      SyntaxPipe,
      TabsComponent,
      TextPipe,
      TableComponent,
      ImageComponent
    ]
  });
}));


describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CitationComponent', () => {
  let component: CitationComponent;
  let fixture: ComponentFixture<CitationComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('CodeComponent', () => {
  let component: CodeComponent;
  let fixture: ComponentFixture<CodeComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('MathComponent', () => {
  let component: MathComponent;
  let fixture: ComponentFixture<MathComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
