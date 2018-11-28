import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'docu-code-form',
  template: `
    <div [formGroup]="form" class="code-form">
      <mat-form-field class="language">
        <mat-select placeholder="Language" formControlName="language">
          <mat-option value="typescript">Typescript</mat-option>
          <mat-option value="cpp">C++</mat-option>
          <mat-option value="html">HTML</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field class="code">
        <textarea matInput formControlName="code" placeholder="Code" cdkTextareaAutosize></textarea>
      </mat-form-field>
    </div>
  `,
  styles: [`
    .code-form { display: flex; flex-direction: column; }
    .language { flex: 0 0 auto; }
    .code { flex: 1 1 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeFormComponent {
  @Input() form;
}
