import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Documentation } from '../../models';

@Component({
  selector: 'docu-tabs-form',
  template: `
    <div [formGroup]="form">
      <mat-tab-group formArrayName="documentations">
        <mat-tab *ngFor="let documentationForm of documentationsForm?.controls; let i = index">
          <ng-template mat-tab-label>{{documentationForm.value.title}}</ng-template>
          <docu-documentation-form [form]="documentationForm" [documentation]="documentations[i]"></docu-documentation-form>
        </mat-tab>
        <mat-tab label="+ Add" (click)="addTab($event)">
          <mat-form-field>
            <input matInput placeholder="Tab label" #title>
          </mat-form-field>
          <button type="button" mat-flat-button color="accent" (click)="addTab(title.value)">Create Tab</button>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() documentations: Documentation[] = [];

  ngOnInit() {
    if (this.documentations) {
      this.adjustTabs();
    }
  }

  get documentationsForm() { return this.form.get('documentations') as FormArray; }

  addTab(title: string) {
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


  adjustTabs() {
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
