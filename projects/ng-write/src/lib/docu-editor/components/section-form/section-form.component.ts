import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Documentation, DocumentationArray, Section } from '../../../models';
import { DynamicFormsService } from '../../services/dynamic-forms.service';


@Component({
  selector: 'docu-section-form',
  templateUrl: './section-form.component.html',
  styleUrls: [ './section-form.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionFormComponent implements OnInit, OnDestroy {
  @Input() sectionForm: FormGroup;
  @Input() section: Section;
  @Output() action = new EventEmitter<string>();
  type: string;
  subscription: Subscription;
  edit = false;
  types = ['text', 'title', 'citation', 'math', 'html', 'code', 'tabs', 'accordion', 'table', 'image'];

  constructor(private dynamicForms: DynamicFormsService) {}

  get content(): FormGroup { return this.sectionForm && this.sectionForm.get('content') as FormGroup; }
  get typeControl(): FormControl { return this.sectionForm && this.sectionForm.get('type') as FormControl; }
  get documentations(): Documentation[] {
    return this.section && this.section.content ? (<DocumentationArray>this.section.content).documentations : [];
  }

  ngOnInit() {
    if (this.typeControl) {
      this.subscription = this.typeControl.valueChanges.subscribe(type => {
        this.type = null;
        if (this.section && this.section.content) {
          delete this.section.content;
        }
        this.dynamicForms.update(this.sectionForm, { type: type });
        this.type = type;
      });
      this.type = this.typeControl.value;
    } else {
      this.sectionForm = this.dynamicForms.create();
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isSimple(type: string): boolean {
    return ['title', 'citation', 'math'].includes(type);
  }
}
