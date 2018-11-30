import { async, ComponentFixture, TestBed, flush, fakeAsync } from '@angular/core/testing';

import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../lib/docu-editor/material.module';

import { SimpleFormComponent } from '../lib/docu-editor/components/simple-form.component';
import { CodeFormComponent } from '../lib/docu-editor/components/code-form.component';
import { SectionFormComponent } from '../lib/docu-editor/components/section-form.component';
import { DocumentationFormComponent } from '../lib/docu-editor/components/documentation-form.component';
import { TableFormComponent } from '../lib/docu-editor/components/table-form.component';
import { AccordionFormComponent } from '../lib/docu-editor/components/accordion-form.component';
import { TabsFormComponent } from '../lib/docu-editor/components/tabs-form.component';
import { FormHeaderComponent } from '../lib/docu-editor/components/form-header.component';
import { DynamicFormsService } from '../lib/docu-editor/services/dynamic-forms.service';
import { EditorComponent } from '../lib/docu-editor/components/editor.component';
import { By } from '@angular/platform-browser';
import { ImageFormComponent } from '../lib/docu-editor/components/image-form.component';
import { ImageDialogComponent } from '../lib/docu-editor/components/image-dialog.component';
import { ImagesService } from '../lib/docu-editor/services/images.service';

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [ NoopAnimationsModule, ReactiveFormsModule, MaterialModule
    ],
    declarations: [
      EditorComponent,
      DocumentationFormComponent,
      SectionFormComponent,
      FormHeaderComponent,
      ImageDialogComponent,
      ImageFormComponent,
      AccordionFormComponent,
      CodeFormComponent,
      SimpleFormComponent,
      TableFormComponent,
      TabsFormComponent
    ],
    providers: [
      DynamicFormsService,
      ImagesService
    ]
  });
}));


const testDocumentation = {
  title: null,
  sections: [
    { type: 'text', content: { text: 'text1' } },
    { type: 'code', content: { language: 'typescript', code: 'c1', caption: 'hello' }}
  ]
};


describe('CodeFormComponent', () => {
  let component: CodeFormComponent;
  let fixture: ComponentFixture<CodeFormComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeFormComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      language: new FormControl('typescript'),
      code: new FormControl('c1'),
      caption: new FormControl()
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form values in ui', fakeAsync(() => {
    const textarea = document.querySelector('textarea');
    expect((<any>textarea).value).toEqual('c1');
  }));

  it('should have 3 items in mat-select', async () => {
    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
    trigger.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      const inquiryOptions = fixture.debugElement.queryAll(By.css('.mat-option-text'));
      expect(inquiryOptions.length).toEqual(3);
    });
  });
});




describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    component.documentation = testDocumentation;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should patch nested form', () => {
    fixture.detectChanges();

    expect(component.form.getRawValue()).toEqual(testDocumentation);
  });
});



describe('DocumentationFormComponent', () => {
  let component: DocumentationFormComponent;
  let fixture: ComponentFixture<DocumentationFormComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationFormComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      title: new FormControl(),
      sections: new FormArray([])
    });
    component.documentation = testDocumentation;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should patch documentationForm', () => {
    expect(component.form.getRawValue()).toEqual(testDocumentation);
  });
});


describe('SectionFormComponent', () => {
  let component: SectionFormComponent;
  let fixture: ComponentFixture<SectionFormComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({ text: new FormControl('test') });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text value', () => {
    const input = document.querySelector('textarea');
    expect((<any>input).value).toEqual('test');
  });
});
