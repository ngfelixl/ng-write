import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { SectionComponent } from '../../shared/components/section.component';
import { CodeComponent } from '../../shared/components/code.component';
import { TextComponent } from '../../shared/components/text.component';
import { TitleComponent } from '../../shared/components/title.component';
import { SyntaxPipe } from '../../shared/pipes/syntax.pipe';
import { TextPipe } from '../../shared/pipes/text.pipe';
import { UpdateMetaService } from '../services/update-meta.service';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticleComponent,
        SectionComponent,
        CodeComponent,
        TextComponent,
        TitleComponent,
        SyntaxPipe,
        TextPipe
      ],
      providers: [
        UpdateMetaService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
