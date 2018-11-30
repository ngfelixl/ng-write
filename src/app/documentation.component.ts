import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-documentation',
  template: `
    <mat-tab-group color="accent">
      <mat-tab label="Editor">
        <docu-editor
          [documentation]="documentation"
          [imageUrls]="imageUrls"
          (save)="docuChanged($event)">
          </docu-editor>
      </mat-tab>
      <mat-tab label="Document"><docu-article [documentation]="documentation"></docu-article></mat-tab>
    </mat-tab-group>
  `,
  styles: [`:host { display: block; margin: 16px; }`]
})
export class DocumentationComponent {
  imageUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    'https://cdn-images-1.medium.com/max/1600/1*P7x-_0XfQz6CVmMY_QAv0w.png'
  ];

  documentation = {
    sections: [
      { type: 'title', content: { text: 'How to write articles with ng-docu' } },
      // { type: 'table', content: { rows: [{ cols: ['1', '2', '3'] }, { cols: ['4', '5', '6'] }] } },
      { type: 'text', content: { text: `This is a demonstration article for writing documentations or articles with *ng-docu*. The types one can use to style the sections are **title**, **text**, **code**, **math** and **citation**. To reorder the sections use the drag-handle next to the *type* input field and drag it to the target position. Press *save* to update the output.`} },
      { type: 'text', content: { text: `Some types have got different *forms*, e.g. **title** is just a single textarea, whereas **code** has the inputs \`language\` (dropdown select) and \`code\` (textarea). The following section contains a code demonstration example. (Note that syntax highlighting is in a very early stage and needs more improvements.)` } },
      { type: 'code', content: { code: `import { Component } from '@angular/core';

@Component()
export class; MyComponent; {

}`, language: 'typescript' } },
      { type: 'text', content: { text: `You can also use tabs in your article. Just select **tabs** as type and create your own tabs. Each tab is a standalone documentation.` } },
      { type: 'tabs', content: { documentations: [
        { title: 'Usage', sections: [
          { type: 'title', content: { text: 'How to use XY feature' }},
          { type: 'text', content: { text: `This is a testing section in a tab group. You can use each type in this *nested* documentation.` } },
          { type: 'code', content: { language: 'typescript', code: `import { Actions } from '@ngrx/effects';
import * fromFeature from \'../store\';

@Injectable()
export class MyEffects {
  constructor(private actions$: Actions) {}
}
` } }
        ] },
        { title: 'API', sections: [
          { type: 'title', content: { text: 'API documentation of XY feature' }},
          { type: 'text', content: { text: 'This could be an API documentation of your code' }}
        ]}
      ] } },
      { type: 'text', content: { text: `To use latex in your documents just select **math** as the type and insert your latex expressions. Inline math for text sections is currently not supported.` } },
      { type: 'title', content: { text: 'Example: Runge-Kutta' } },
      { type: 'text', content: { text: 'There is an initial conditions problem with the following definition:' } },
      { type: 'math', content: { text: `y'(t) = f(t, y(t)), \\qquad y(t_0) = y_0, \\qquad y: \\R \\rightarrow \\R^d`} },
      { type: 'text', content: { text: `where *y(t)* is the exact solution. Runge-Kutta is a numerical integration method which determines the function value at different *t* \'s and sums each value with a weight to get the next value.` } },
      { type: 'math', content: { text: 'y_{n+1} = y_n + h\\sum_{j=1}^s b_jk_j' } },
      { type: 'title', content: { text: 'Setup an NgRX store' } },
      { type: 'accordion', content: { documentations: [
        { title: 'Actions', sections: [
          { type: 'text', content: { text: `At first create an enumaration which contains all the action keys. It is a good practice to prefix them with your features or entities names.`}},
          { type: 'code', content: { language: 'typescript', code: `import { Action } from '@ngrx/store';

export enum EntityActionTypes {
  Load = '[Entity] Load',
  LoadSuccess = '[Entity] Load Success',
  LoadFailed = '[Entity] Load Failed'
}` } },
          { type: 'text', content: { text: 'Afterwards create the actions as classes which implement the ngrx *Action* class.' } },
          { type: 'code', content: { language: 'typescript', code: `export class LoadEntity implements Action {
  readonly type = FeatureActionTypes.Load;
}

export class LoadEntitySuccess implements Action {
  readonly type = FeatureActionTypes.LoadSuccess;
  constructor(public payload: Entity[]) {}
}
` } },
          { type: 'text', content: { text: `Do this for the *failed* action as well, but with an error payload. Finally export the combined type.` } },
          { type: 'code', content: {
            language: 'typescript', code: `export type EntityActions = LoadEntity | LoadEntitySuccess | LoadEntityFailed;`
          } }
        ] },
        { title: 'Effects', sections: [
          { type: 'code', content: { language: 'typescript', code: `import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as fromFeature from '../actions';
import { EntityService } from '../../services/entity.service';

@Injectable()
export class EntityEffects {
  constructor(
    private actions$: Actions,
    private entityService: EntityService
  ) {}

  @Effect()
  load$ = this.actions$
    .ofType(fromFeature.EntityActionTypes.Load)
    .pipe(
      switchMap(() => {
        return this.entityService.get().pipe(
          map(articles => new fromFeature.LoadEntitySuccess(articles)),
          catchError(error => of(new fromFeature.LoadEntityFailed(error)))
        );
      })
    );
}` }}
        ] },
        { title: 'Reducers', sections: [] },
        { title: 'Selectors', sections: [] }
      ] } }
    ]
  };

  constructor(private cd: ChangeDetectorRef) {}

  docuChanged(documentation: any) {
    this.documentation = documentation;
    console.log(documentation);
    this.cd.detectChanges();
  }
}
