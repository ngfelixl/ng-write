import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Documentation } from '../../../models';
import { DynamicFormsService } from '../../services/dynamic-forms.service';

@Component({
  selector: 'docu-documentation-form',
  templateUrl: './documentation-form.component.html',
  styleUrls: [ './documentation-form.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() documentation: Documentation;

  constructor(private dynamicForms: DynamicFormsService) {}

  ngOnInit() {
    if (this.documentation) {
      this.adjustRows(this.documentation.sections);
    }
  }

  get sections(): FormArray {
    return this.form.get('sections') as FormArray;
  }

  addAfter(index: number) { this.sections.insert(index + 1, this.dynamicForms.create()); }
  addEnd() { this.sections.push(this.dynamicForms.create()); }
  delete(index: number) { this.sections.removeAt(index); }


  drop(event: CdkDragDrop<FormGroup[]>) {
    const dir = event.currentIndex > event.previousIndex ? 1 : -1;

    const from = event.previousIndex;
    const to = event.currentIndex;

    const temp = this.sections.at(from);
    for (let i = from; i * dir < to * dir; i = i + dir) {
      const current = this.sections.at(i + dir);
      this.sections.setControl(i, current);
    }
    this.sections.setControl(to, temp);
  }


  do(action: string, index: number) {
    switch (action) {
      case 'add': this.addAfter(index); break;
      case 'delete': this.delete(index); break;
    }
  }


  adjustRows(sections) {
    this.sections.reset();
    if (sections.length === 0) {
      this.sections.push(this.dynamicForms.create());
    } else {
      for (const section of sections) {
        const item = this.dynamicForms.create(section);
        item.patchValue(section);
        this.sections.push(item);
      }
    }
  }
}
