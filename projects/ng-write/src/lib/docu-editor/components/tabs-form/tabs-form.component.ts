import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Documentation } from '../../../models';
import { DynamicFormsService } from '../../services/dynamic-forms.service';

@Component({
  selector: 'docu-tabs-form',
  templateUrl: './tabs-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() documentations: Documentation[] = [];

  constructor(private dynamicForms: DynamicFormsService) {}

  ngOnInit() {
    if (this.documentations) {
      this.adjustTabs();
    }
  }

  get documentationsForm() { return this.form.get('documentations') as FormArray; }
  getDocumentation(index: number) {
    return this.documentations && this.documentations[index] ? this.documentations[index] : null;
  }

  addTab(title: string) {
    const documentation = this.dynamicForms.documentation();

    // Add the first section manually as FormArrays do not patch
    (documentation.get('sections') as FormArray).push(new FormGroup({
      type: new FormControl('text'),
      content: new FormGroup({ text: new FormControl() })
    }));
    documentation.patchValue({title: title, sections: [] });
    if (!this.documentations) {
      this.documentations = [];
    }
    this.documentations.push({title: title, sections: []});
    this.documentationsForm.push(documentation);
  }


  adjustTabs() {
    this.documentationsForm.reset();
    if (this.documentations && this.documentations.length > 0) {
      for (const documentation of this.documentations) {
        const item = this.dynamicForms.documentation();
        item.patchValue(documentation);
        this.documentationsForm.push(item);
      }
    } else {
      this.form.setControl('documentations', new FormArray([]));
    }
  }

  trackByIndex(index: number) {
    return index;
  }
}
