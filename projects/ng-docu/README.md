# ng-docu

[![Build Status](https://travis-ci.org/ngfelixl/ng-libraries.svg?branch=master)](https://travis-ci.org/ngfelixl/ng-libraries)

Documentation helper Angular components for writing documentations and articles. See this library in action [here](https://ngfelixl.github.io/ng-libraries).

[![See animation on github](https://github.com/ngfelixl/ng-libraries/blob/master/projects/ng-docu/img/animation_docu.gif)](https://github.com/ngfelixl/ng-libraries/blob/master/projects/ng-docu/img/animation_docu.gif)

## Installation

Add the package to your angular project using

```bash
npm install ng-docu
# or
yarn add ng-docu
# or
ng add ng-docu
```

Since math requires katex for rendering proper LaTeX expressions, one
need to include the katex styles in the **angular.json** file manually.

```json
"projects": {
  "projectID": {
    "architect": {
      "build": {
        "options": {
          "styles": [
            "./node_modules/katex/dist/katex.min.css"
```

replace `projectID` with your projects name.

## Usage

There are two modules to use. The `DocuModule` and the `DocuEditorModule`. The
`DocuModule` has got predefined components for displaying the documentation generated
using the `DocuEditorModule`.

At first import one of these modules in your application module.

```typescript
@NgModule({
  imports: [ DocuModule, DocuEditorModule ]
})
export class ApplicationModule{}
```

### The documentation editor

Make sure to have the `DocuEditorModule` imported. The module provides a complete form with live rendering. It should integrate with your **@angular/material** configuration.

In the template simply use the editor tag to create a complete form for the article.

```
<docu-editor></docu-editor>
```

#### <docu-editor> API

- `@Output() save($event)`: When the user saves the form, the save event will emit and contain the complete nested form.
- `@Input() documentation: Documentation`: The user can patch the form with a previously created documentation.

### Displaying the document

The document can be displayed using

```
<docu-article></docu-article>
```

which just has a `@Input() documentation: Documentation` interface.

## Get in contact

- Check the [authors website](https://felixlemke.com)
- Get in touch via [twitter](https://twitter.com/ngfelixl) or [facebook](https://www.facebook.com/ngfelixlemke/)