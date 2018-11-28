import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Section } from '../../models';
import { Code, Text } from '../../models/section-types';

@Injectable()
export class FormGroupCreateService {
  code(item: Section): FormGroup {
    return new FormGroup({
      type: new FormControl(item.type),
      content: new FormGroup({
        language: new FormControl((<Code>item.content).language),
        code: new FormControl((<Code>item.content).code)
      })
    });
  }

  tabs(item: Section): FormGroup {
    return new FormGroup({
      type: new FormControl(item.type),
      content: new FormGroup({
        documentations: new FormArray([])
      })
    });
  }

  default(item?: Section): FormGroup {
    return new FormGroup({
      type: new FormControl(item ? item.type : 'text'),
      content: new FormGroup({
        text: new FormControl(item && item.content ? (<Text>item.content).text : null)
      })
    });
  }
}
