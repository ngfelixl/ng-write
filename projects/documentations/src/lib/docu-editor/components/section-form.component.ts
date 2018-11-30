import { Component, Input, EventEmitter, Output, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Section, Documentation, DocumentationArray } from '../../models';
import { Subscription } from 'rxjs';
import { Table } from '../../models/section-types';
import { DynamicFormsService } from '../services/dynamic-forms.service';


@Component({
  selector: 'docu-section-form',
  template: `
    <mat-card>
      <mat-card-content>
        <div [formGroup]="sectionForm" class="form">
          <docu-form-header [form]="sectionForm" (action)="action.emit($event)"><ng-content></ng-content></docu-form-header>
          <div class="section-form">
            <docu-simple-form *ngIf="isSimple(type)" [form]="content"></docu-simple-form>
            <docu-code-form *ngIf="type === 'code'" [form]="content"></docu-code-form>
            <docu-tabs-form *ngIf="type === 'tabs'" [form]="content" [documentations]="documentations"></docu-tabs-form>
            <docu-accordion-form *ngIf="type === 'accordion'" [form]="content" [documentations]="documentations"></docu-accordion-form>
            <docu-table-form *ngIf="type === 'table'" [form]="content" [table]="section?.content"></docu-table-form>
            <docu-image-form *ngIf="type === 'image'" [form]="content"></docu-image-form>
          </div>
        </div>
        <div class="preview">
          <docu-section [section]="sectionForm.value"></docu-section>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      margin-bottom: 16px;
      display: flex;
      width: 100%;
      flex-direction: row;
      transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
    }
    mat-card-content { display: flex; flex-wrap: wrap; overflow-x: auto; }
    mat-card-content > .form { flex: 1 1 320px; min-width: 320px; }
    mat-card-content > .preview { flex: 1 1 320px; min-width: 320px; }
    mat-card { box-sizing: border-box; width: 100%; margin: 4px; }
    .section-form {
      width: 100%; background-color: rgba(0, 0, 0, 0.1);
      padding: 4px; box-sizing: border-box; border-radius: 4px;
      overflow: auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionFormComponent implements OnInit, OnDestroy {
  @Input() sectionForm: FormGroup;
  @Input() section: Section;
  @Output() action = new EventEmitter<string>();
  type: string;
  subscription: Subscription;

  constructor(private dynamicForms: DynamicFormsService) {}

  get content(): FormGroup { return this.sectionForm && this.sectionForm.get('content') as FormGroup; }
  get typeControl(): FormControl { return this.sectionForm && this.sectionForm.get('type') as FormControl; }
  get documentations(): Documentation[] {
    return this.section && this.section.content ? (<DocumentationArray>this.section.content).documentations : [];
  }

  ngOnInit() {
    if (this.typeControl) {
      this.subscription = this.typeControl.valueChanges.subscribe(type => {
        this.type = null;
        if (this.section && this.section.content) {
          delete this.section.content;
        }
        this.dynamicForms.update(this.sectionForm, { type: type });
        this.type = type;
      });
      this.type = this.typeControl.value;
    } else {
      this.sectionForm = this.dynamicForms.create();
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  isSimple(type: string): boolean {
    return ['text', 'title', 'citation', 'math'].includes(type);
  }
}
