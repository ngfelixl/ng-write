import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Section } from '../../models';
import { Code, Text } from '../../models/section-types';

@Injectable()
export class DynamicFormsService {

  create(item?: Section): FormGroup {
    const formGroup = new FormGroup({
      type: new FormControl(item ? item.type : 'text')
    });
    this.update(formGroup, item);
    return formGroup;
  }

  update(formGroup: FormGroup, item?: Section) {
    if (item) {
      switch (item.type) {
        case 'code':
          formGroup.setControl('content', this.code());
          break;
        case 'accordion':
        case 'tabs':
          formGroup.setControl('content', this.tabs());
          break;
        case 'image':
          formGroup.setControl('content', this.image());
          break;
        case 'table':
          formGroup.setControl('content', this.table());
          break;
        default:
          formGroup.setControl('content', this.text());
      }
    } else {
      formGroup.setControl('content', this.text());
    }
  }

  public documentation(): FormGroup {
    return new FormGroup({
      title: new FormControl(),
      sections: new FormArray([])
    });
  }

  private code(item?: Section): FormGroup {
    return new FormGroup({
      language: new FormControl(item && item.content ? (<Code>item.content).language : null),
      code: new FormControl(item && item.content ? (<Code>item.content).code : '')
    });
  }

  private tabs(item?: Section): FormGroup {
    return new FormGroup({
      documentations: new FormArray([])
    });
  }

  private image(item?: Section): FormGroup {
    return new FormGroup({
      imageUrl: new FormControl(),
      textwidth: new FormControl(80),
      caption: new FormControl()
    });
  }

  private text(item?: Section): FormGroup {
    return new FormGroup({
      text: new FormControl(item && item.content ? (<Text>item.content).text : null)
    });
  }

  private table(item?: Section): FormGroup {
    return new FormGroup({
      rows: new FormArray([
        new FormGroup({ cols: new FormArray([]) })
      ])
    });
  }
}
