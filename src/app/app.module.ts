import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentationComponent } from './documentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule, MatToolbarModule } from '@angular/material';

import { DocuModule, DocuEditorModule } from '../../projects/documentations/src/public_api';

@NgModule({
  declarations: [
    AppComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    DocuModule,
    DocuEditorModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
