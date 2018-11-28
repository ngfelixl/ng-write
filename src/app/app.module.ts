import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocuModule, DocuEditorModule } from '../../projects/documentations/src/public_api';
import { DocumentationComponent } from './documentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule, MatToolbarModule } from '@angular/material';

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
