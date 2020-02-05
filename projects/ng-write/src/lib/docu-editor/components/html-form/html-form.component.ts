import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'docu-html-form',
  templateUrl: './html-form.component.html',
  styleUrls: [ './html-form.component.css' ]
})
export class HtmlFormComponent {
  @Input() form: FormGroup;
}
