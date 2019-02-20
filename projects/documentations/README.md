# documentations - the Angular article library

[![Build Status](https://travis-ci.org/ngfelixl/documentations.svg?branch=master)](https://travis-ci.org/ngfelixl/documentations)

See this library in action [here](https://ngfelixl.github.io/documentations). Documentation helper Angular components for writing documentations and articles. (https://ngfelixl.github.io/documentations).

[![See animation on github](https://github.com/ngfelixl/documentations/blob/master/projects/documentations/img/animation_docu.gif)](https://github.com/ngfelixl/documentations/blob/master/projects/documentations/img/animation_docu.gif)

## Installation

Add the package to your angular project using

```bash
npm install documentations
# or
yarn add documentations
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

## Get in touch

[![twitter](https://img.shields.io/badge/twitter-%40ngfelixl-blue.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ngfelixl)
[![github](https://img.shields.io/badge/github-%40ngfelixl-blue.svg?logo=github)](https://github.com/ngfelixl)

Hi, I am Felix,
Angular and NgRX contributor

![avatar](https://avatars2.githubusercontent.com/u/24190530?s=200&v=4)

If you like this library, think about giving it a star or follow me on twitter or github.