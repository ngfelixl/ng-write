import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Documentation } from '../../models';

@Component({
  selector: 'docu-editor',
  template: `
    <form [formGroup]="form" (ngSubmit)="save.emit(form.value)">
      <docu-documentation-form [form]="form" [documentation]="documentation"></docu-documentation-form>
      <button mat-raised-button color="primary">Save</button>
    </form>
  `,
  styles: [``]
})
export class EditorComponent {
  form: FormGroup;
  @Input() documentation: Documentation;
  @Output() save = new EventEmitter<Documentation>();

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null),
      sections: new FormArray([])
    });
  }
}
