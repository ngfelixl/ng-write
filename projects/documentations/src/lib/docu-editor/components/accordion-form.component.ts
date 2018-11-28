import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Documentation } from '../../models';

@Component({
  selector: 'docu-accordion-form',
  template: `
    <div [formGroup]="form">
      <mat-accordion formArrayName="documentations">
        <mat-expansion-panel *ngFor="let documentationForm of documentationsForm?.controls; let i = index">
          <mat-expansion-panel-header>
            <mat-panel-title>{{documentationForm.value.title}}</mat-panel-title>
          </mat-expansion-panel-header>
          <docu-documentation-form [form]="documentationForm" [documentation]="documentations[i]"></docu-documentation-form>
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

  ngOnInit() {
    if (this.documentations) {
      this.adjustPanels();
    }
  }

  get documentationsForm() { return this.form.get('documentations') as FormArray; }

  addPanel(title: string) {
    const documentation = this.createSubDocumentation();
    documentation.patchValue({title: title});
    if (!this.documentations) {
      this.documentations = [];
    }
    this.documentations.push({title: title, sections: []});
    this.documentationsForm.push(documentation);
  }

  createSubDocumentation(): FormGroup {
    return new FormGroup({
      title: new FormControl(),
      sections: new FormArray([])
    });
  }


  adjustPanels() {
    this.documentationsForm.reset();
    if (this.documentations.length > 0) {
      for (const docu of this.documentations) {
        const item = this.createSubDocumentation();
        item.patchValue(docu);
        this.documentationsForm.push(item);
      }
    } else {
      this.form.setControl('documentations', new FormArray([]));
    }
  }
}
