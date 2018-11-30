import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Documentation } from '../../models';
import { DynamicFormsService } from '../services/dynamic-forms.service';

@Component({
  selector: 'docu-accordion-form',
  template: `
    <div [formGroup]="form">
      <mat-accordion formArrayName="documentations">
        <mat-expansion-panel *ngFor="let documentationForm of documentationsForm?.controls; let i = index">
          <mat-expansion-panel-header>
            <mat-panel-title>{{documentationForm.value.title}}</mat-panel-title>
          </mat-expansion-panel-header>
          <docu-documentation-form [form]="documentationForm" [documentation]="getDocumentation(i)"></docu-documentation-form>
        </mat-expansion-panel>

        <mat-expansion-panel>
          <mat-expansion-panel-header><mat-panel-title>+ Add</mat-panel-title></mat-expansion-panel-header>
          <mat-form-field>
            <input matInput placeholder="Panel label" #title>
          </mat-form-field>
          <button type="button" mat-flat-button color="accent" (click)="addPanel(title.value)">Create Panel</button>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  `,
  styles: [``],
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
    const template = { title: title, sections: [ { type: 'text', content: { text: null } } ] };
    const documentation = this.dynamicForms.documentation();
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
