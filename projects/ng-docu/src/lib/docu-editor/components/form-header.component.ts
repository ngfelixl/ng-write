import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'docu-form-header',
  template: `
    <mat-form-field [formGroup]="form">
      <mat-select formControlName="type" placeholder="Type">
        <mat-option *ngFor="let option of options" [value]="option.toLowerCase()">{{option}}</mat-option>
      </mat-select>
    </mat-form-field>
    <div class="action-buttons">
      <ng-content></ng-content>
      <button type="button" mat-icon-button (click)="action.emit('add')" matTooltip="Add another section below">
        <mat-icon>add</mat-icon>
      </button>
      <button type="button" mat-icon-button (click)="action.emit('delete')" matTooltip="Delete this section">
        <mat-icon>delete</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: flex; background-color: rgba(0,0,0,0.1); border-radius: 4px;
      margin-bottom: 8px; align-items: center; padding: 4px; box-sizing: border-box; justify-content: space-between; }
    .action-buttons { display: grid; grid-template-columns: 1fr 1fr 1fr; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormHeaderComponent {
  @Input() form: FormGroup;
  @Output() action = new EventEmitter<string>();
  options = ['Title', 'Text', 'Code', 'Citation', 'Math', 'Tabs', 'Table', 'Accordion'];
}
