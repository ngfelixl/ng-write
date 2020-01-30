import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { EditorComponent } from 'projects/ng-write/src/public_api';

@Component({
  selector: 'app-documentation',
  template: `
    <mat-tab-group color="accent">
      <mat-tab label="Document"><docu-article [documentation]="documentation"></docu-article></mat-tab>
      <mat-tab label="Editor">
        <docu-editor
          [documentation]="documentation"
          [imageUrls]="imageUrls">
          </docu-editor>
        <button mat-raised-button color="primary" (click)="save()"><mat-icon>save</mat-icon> Save</button>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [`
    :host { display: block; margin: 16px; }
    button { margin: 4px; }
    docu-editor {
      display: block;
      margin: 12px;
    }
  `]
})
export class DocumentationComponent {
  @ViewChild(EditorComponent) editor: EditorComponent;
  imageUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
    'https://cdn-images-1.medium.com/max/1600/1*P7x-_0XfQz6CVmMY_QAv0w.png'
  ];

  documentation = {
    sections: [
      { type: 'title', content: { text: 'ngWrite' } },
      { type: 'text', content: { text: `This is a demonstration article constructed and rendered by this library. There are many different section types you can use for your articles, e.g. **title**, **text**, **code**, **math**, **images**, **tables**, **citation**, nested **tabs** and **accordions**. To reorder the sections use the drag-handle next to the *type* input field and drag it to the target position. Press *save* to update the output.`} },
      { type: 'image', content: { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png', textwidth: 10 } },
      { type: 'text', content: { text: `Some section types have got different *formGroups*, e.g. **title** is just a single textarea, whereas **code** has the inputs \`language\` (dropdown select), \`code\` (textarea) and \`caption\` (input). The following section contains a code demonstration example. (Note that syntax highlighting is in a very early stage and needs more improvements. Feel free to contribute.) As you see there are several inline styles available. These are bold (&#42;&#42;), itallic (&#42;) and code (&#96;).` } },
      { type: 'code', content: { language: 'typescript', caption: 'Example of an Angular component', code: `import { Component } from '@angular/core';

@Component()
export class MyComponent {

}`}
      },
      { type: 'text', content: { text: `You can also use tabs in your article. Just select **tabs** as type and create your own tabs. Each tab is a standalone documentation, similar to expansion panels. You can build deep nested documentations as you can see in the *Deep nesting demo* tab of the following tab panel. You can use as many nested expansion panels or tabs as fitting in your screen.` } },
      { type: 'tabs', content: { documentations: [
        { title: 'Usage', sections: [
          { type: 'title', content: { text: 'Render a documentation' }},
          { type: 'text', content: { text: `At first install all necessary dependencies by the following *npm* command.` } },
          { type: 'code', content: { code: `npm i ng-write
# or
yarn add ng-write` } },
          { type: 'text', content: { text: 'Import all necessary dependencies in your angular module. If you just need rendering import only `DocuModule`.' } },
          { type: 'code', content: { language: 'typescript', caption: 'Import modules', code: `import { DocuModule, DocuEditorModule } from '../../projects/documentations/src/public_api';

@NgModule({
  imports: [
    DocuModule,
    DocuEditorModule
  ]
})
export class AppModule { }` }},
          { type: 'text', content: { text: 'In order to render the generated article just use the following tag and pass in the documentation as `@Input`.' } },
          { type: 'code', content: { language: 'html', code: `\<docu-article [documentation]="documentation"\>\<\/docu-article\>` } },
          { type: 'title', content: { text: 'Creating a documentation editor' } },
          { type: 'text', content: { text: 'Make sure that you have imported the `DocuEditorModule` first. This module provides a component `docu-editor` containing the complete logic for creating the article. Use the `documentation` input to patch the form, works with all the deep nesting.' } },
          { type: 'code', content: { language: 'html', code: '<docu-editor [documentation]="documentation" [imageUrls]="imageUrls" (save)="mySaveFunction($event)"></docu-editor>' } },
          { type: 'text', content: { text: 'Use the `save` event to catch and store the saved documentation. The documentation data is contained in the `$event` variable. If you want to include images in your article, hand in the imageUrls via the suggested `@Input()`.' } }
        ] },
        { title: 'API', sections: [
          { type: 'title', content: { text: 'docu-article' } },
          { type: 'table', content: { rows: [
            { cols: ['@Input() **documentation**', 'The documentation to render, emitted by the save *$event* of the docu-editor.'] },
          ] } },
          { type: 'title', content: { text: 'docu-editor' } },
          { type: 'table', content: { rows: [
            { cols: ['@Input() **documentation**', '(Optional) A documentation to patch the form initally'] },
            { cols: ['@Input() **imageUrls**', '(Optional) Urls (strings) of images available in the articles image section'] },
            { cols: ['@Output() **save($event)**', 'Event fired when the documentation is saved. *$event* will contain the documentation.'] }
          ] } },
          { type: 'text', content: { text: 'On the other hand you can create a ViewChild which views the `EditorComponent`. Then create a `save` function which accesses the ViewChilds `form` attribute and call `getRawValue()` on it.' }}
        ] },
        { title: 'Deep nesting demo', sections: [
          { type: 'title', content: { text: 'API documentation of XY feature' }},
          { type: 'text', content: { text: 'This could be an API documentation of your code' }},
          { type: 'accordion', content: { documentations: [
            { title: 'Nested expansion panel 1', sections: [ { type: 'tabs', content: { documentations: [
              { title: 'Deep nested tab 1', sections: [ { type: 'text', content: { text: 'I am deep nested tab 1 content' } } ]},
              { title: 'Deep nested tab 2', sections: [ { type: 'text', content: { text: 'I am deep nested tab 2 content' } } ]}
            ] } } ] },
            { title: 'Nested expansion panel 2', sections: [ { type: 'accordion', content: { documentations: [
              { title: 'Deep nested panel 1', sections: [ { type: 'text', content: { text: 'I am deep nested tab 1 content' } } ]},
              { title: 'Deep nested panel 2', sections: [ { type: 'text', content: { text: 'I am deep nested tab 2 content' } } ]}
            ] } } ] },
            { title: 'Nested expansion panel 3', sections: [ { type: 'tabs', content: { documentations: [
              { title: 'Deep nested tab 1', sections: [ { type: 'text', content: { text: 'I am deep nested tab 1 content' } } ]},
              { title: 'Deep nested tab 2', sections: [ { type: 'text', content: { text: 'I am deep nested tab 2 content' } } ]}
            ] } } ] }
          ]}}
        ]}
      ] } },
      { type: 'text', content: { text: `To use latex in your documents just select **math** as the type and insert your latex expressions. Inline math for text sections is currently not supported.` } },
      { type: 'title', content: { text: 'Math-Example: Runge-Kutta' } },
      { type: 'text', content: { text: 'There is an initial conditions problem with the following definition:' } },
      { type: 'math', content: { text: `y'(t) = f(t, y(t)), \\qquad y(t_0) = y_0, \\qquad y: \\R \\rightarrow \\R^d`} },
      { type: 'text', content: { text: `where *y(t)* is the exact solution. Runge-Kutta is a numerical integration method which determines the function value at different *t* \'s and sums each value with a weight to get the next value.` } },
      { type: 'math', content: { text: 'y_{n+1} = y_n + h\\sum_{j=1}^s b_jk_j' } },
      { type: 'text', content: { text: 'The above equation is generated using the following latex expression' } },
      { type: 'code', content: { code: 'y_{n+1} = y_n + h\\sum_{j=1}^s b_jk_j', caption: 'Latex expressions in documentations' } },
      { type: 'text', content: { text: 'Displaying data is a common task for writing scientific, educational or other types of posts/blogs/aricles or whatever. Therefore a table component can\'t be missed. There is example data in the following table.' } },
      { type: 'table', content: { caption: 'Test suites comparison on different processing units', rows: [ { cols: ['', '**CPU** [s]', '**GPU** [s]', '**FPGA** [s]'] }, { cols: ['**Test suite 1**', '5.6', '6.3', '21.2'] }, { cols: ['**Test suite 2**', '5.6', '6.3', '35.7'] }] } },
      { type: 'title', content: { text: 'Setup an NgRX store' } },
      { type: 'accordion', content: { documentations: [
        { title: 'Actions', sections: [
          { type: 'text', content: { text: `At first create an enumaration which contains all the action keys. It is a good practice to prefix them with your features or entities names.`}},
          { type: 'code', content: { language: 'typescript', caption: 'Define all possible actions with a unique keyword', code: `import { Action } from '@ngrx/store';

export enum EntityActionTypes {
  Load = '[Entity] Load',
  LoadSuccess = '[Entity] Load Success',
  LoadFailed = '[Entity] Load Failed'
}` } },
          { type: 'text', content: { text: 'Afterwards create the actions as classes which implement the ngrx *Action* class.' } },
          { type: 'code', content: { language: 'typescript', caption: 'Create action classes with optional payload', code: `export class LoadEntity implements Action {
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
          { type: 'code', content: { language: 'typescript', caption: 'Effect classes are decorated by an Injectable decorator', code: `import { Actions } from '@ngrx/effects';
import * fromFeature from \'../store\';

@Injectable()
export class MyEffects {
  constructor(private actions$: Actions) {}
}
` } },
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
        { title: 'Reducers', sections: [
          { type: 'text', content: { text: 'Ups. No explanation found. ¯\\_(ツ)_/¯. But did you now? Images are rendered as html5 figures if you add a caption.' } },
          { type: 'image', content: { imageUrl: 'https://cdn-images-1.medium.com/max/1600/1*P7x-_0XfQz6CVmMY_QAv0w.png', textwidth: 100, caption: 'Angular is nice.' } }
        ] },
        { title: 'Selectors', sections: [ { type: 'text', content: { text: '(っ◕‿◕)っ give me a hug.' } } ] }
      ] } },
      { type: 'title', content: { text: 'Get in contact' } },
      { type: 'text', content: { text: `Hi, I am Felix Lemke. If you like that library visit [my personal site](https://felixlemke.dev) and/or follow me on
[github](https://github.com/ngfelixl)
[twitter](https://twitter.com/ngfelixl)
[instagram](https://instagram.com/ngfelixl)` } },
      { type: 'text', content: { text: '' } }
    ]
  };

  constructor(private cd: ChangeDetectorRef) {}

  save() {
    this.documentation = this.editor.form.getRawValue();
    this.cd.detectChanges();
  }
}
