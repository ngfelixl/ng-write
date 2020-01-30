import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'docu-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: [ './text-form.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFormComponent {
  @Input() form: FormGroup;
}
