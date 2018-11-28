import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { CodeComponent } from './code.component';
import { TextComponent } from './text.component';
import { TitleComponent } from './title.component';
import { SyntaxPipe } from '../pipes/syntax.pipe';
import { TextPipe } from '../pipes/text.pipe';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SectionComponent,
        CodeComponent,
        TextComponent,
        TitleComponent,
        SyntaxPipe,
        TextPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
