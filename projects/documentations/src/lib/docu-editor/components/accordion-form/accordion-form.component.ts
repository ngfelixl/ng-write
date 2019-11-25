import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Documentation } from '../../../models';
import { DynamicFormsService } from '../../services/dynamic-forms.service';

@Component({
  selector: 'docu-accordion-form',
  templateUrl: './accordion-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() documentations: Documentation[] = [];

  constructor(private dynamicForms: DynamicFormsService) {}

  ngOnInit() {
    if (this.documentations) {
      this.adjustPanels();
    }
  }

  get documentationsForm() { return this.form.get('documentations') as FormArray; }
  getDocumentation(index) {
    return this.documentations && this.documentations[index] ? this.documentations[index] : null;
  }

  addPanel(title: string) {
    const template = { title: title, sections: [] };
    const documentation = this.dynamicForms.documentation();

    // Add the first section manually as FormArrays do not patch
    (documentation.get('sections') as FormArray).push(new FormGroup({
      type: new FormControl('text'),
      content: new FormGroup({ text: new FormControl() })
    }));
    documentation.patchValue(template);
    if (!this.documentations) {
      this.documentations = [];
    }
    this.documentations.push(template);
    this.documentationsForm.push(documentation);
  }


  adjustPanels() {
    this.documentationsForm.reset();
    if (this.documentations.length > 0) {
      for (const documentation of this.documentations) {
        const item = this.dynamicForms.documentation();
        item.patchValue(documentation);
        this.documentationsForm.push(item);
      }
    } else {
      this.form.setControl('documentations', new FormArray([]));
    }
  }
}
