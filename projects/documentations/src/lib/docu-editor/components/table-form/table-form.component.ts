import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Table } from '../../../models';

@Component({
  selector: 'docu-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: [ './table-form.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() table: Table;

  get tableRows(): FormArray {
    return this.form.get('rows') as FormArray;
  }
  get numRows(): number { return this.tableRows ? this.tableRows.length : 0; }
  get numCols(): number { return this.numRows > 0 ? (<FormArray>this.tableRows.at(0).get('cols')).length : 0; }
  get cols(): number[] { return Array(this.numCols).map((o, i) => i); }

  ngOnInit() {
    this.patchTable();
  }

  patchTable() {
    this.form.setControl('rows', new FormArray([]));
    if (!this.table) {
      this.table = { rows: [{ cols: [''] }] };
    }
    for (let i = 0; i < this.table.rows.length; i++) {
      const row = this.table.rows[i];
      this.tableRows.push(new FormGroup({ cols: new FormArray(this.createControlsArray(row.cols)) } ));
    }
  }

  createControlsArray(items: any[]): FormControl[] {
    const controls = [];
    for (const item of items) {
      controls.push(new FormControl(item));
    }
    return controls;
  }

  addRow() {
    const controls = [];
    for (let i = 0; i < this.numCols; i++) {
      controls.push(new FormControl(''));
    }
    this.tableRows.push(new FormGroup({ cols: new FormArray(controls) }));
  }
  addCol() {
    for (const row of this.tableRows.controls) {
      (<FormArray>row.get('cols')).push(new FormControl(''));
    }
  }

  removeRow(index: number) {
    if (this.numRows > 1) {
      this.tableRows.removeAt(index);
    }
  }

  removeCol(index: number) {
    if (this.numCols > 1) {
      for (const row of this.tableRows.controls) {
        (<FormArray>row.get('cols')).removeAt(index);
      }
    }
  }

  getColControls(row: AbstractControl) {
    return (row.get('cols') as FormArray).controls;
  }
}
