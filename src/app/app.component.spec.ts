import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatTabsModule, MatIconModule, MatButtonModule } from '@angular/material';
import { DocumentationComponent } from './documentation.component';

import { DocuModule, DocuEditorModule } from '../../projects/documentations/src/public_api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        DocuModule,
        DocuEditorModule
      ],
      declarations: [
        AppComponent,
        DocumentationComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
