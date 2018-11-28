import { Component, Input, EventEmitter, Output, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Section, Documentation, DocumentationArray } from '../../models';
import { Subscription } from 'rxjs';
import { Table } from '../../models/section-types';


@Component({
  selector: 'docu-section-form',
  template: `
    <mat-card>
      <mat-card-content>
        <div class="card-content">
          <div [formGroup]="sectionForm" class="form">
            <docu-form-header [form]="sectionForm" (action)="action.emit($event)"><ng-content></ng-content></docu-form-header>
            <div class="section-form">
              <docu-simple-form *ngIf="isSimple(type)" [form]="content"></docu-simple-form>
              <docu-code-form *ngIf="type === 'code'" [form]="content"></docu-code-form>
              <docu-tabs-form *ngIf="type === 'tabs'" [form]="content" [documentations]="documentations"></docu-tabs-form>
              <docu-accordion-form *ngIf="type === 'accordion'" [form]="content" [documentations]="documentations"></docu-accordion-form>
              <docu-table-form *ngIf="type === 'table'" [form]="content" [table]="section?.content"></docu-table-form>
            </div>
          </div>
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
    .form { width: 100%; overflow: auto; }
    .card-content { display: flex; flex-wrap: wrap; }
    .card-content > * { flex: 1 0 250px; }
    mat-card { box-sizing: border-box; width: 100%; margin: 4px; }
    .section-form { width: 100%; background-color: rgba(0, 0, 0, 0.1); padding: 4px; box-sizing: border-box; border-radius: 4px; overflow: auto; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionFormComponent implements OnInit, OnDestroy {
  @Input() sectionForm: FormGroup;
  @Input() section: Section;
  @Output() action = new EventEmitter<string>();
  type: string;
  subscription: Subscription;

  get content(): FormGroup { return this.sectionForm.get('content') as FormGroup; }
  get documentations(): Documentation[] { return this.section ? (<DocumentationArray>this.section.content).documentations : []; }

  ngOnInit() {
    this.subscription = this.sectionForm.get('type').valueChanges.subscribe(type => {
      const temp = this.type;
      this.type = null;
      switch (temp) {
        case 'code':
          this.content.removeControl('language');
          this.content.removeControl('code');
          break;
        case 'tabs':
        case 'accordion':
          this.content.removeControl('documentations');
          break;
        case 'table':
          this.content.removeControl('table');
          break;
        default:
          this.content.removeControl('text');
      }

      switch (type) {
        case 'code':
          this.content.addControl('language', new FormControl(null));
          this.content.addControl('code', new FormControl(''));
          break;
        case 'tabs':
        case 'accordion':
          this.content.addControl('documentations', new FormArray([]));
          break;
        case 'table':
          this.content.addControl('table', new FormGroup({}));
          break;
        default:
          this.content.addControl('text', new FormControl());
      }
      this.type = type;
    });
    this.type = this.sectionForm.get('type').value;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isSimple(type: string): boolean {
    return ['text', 'title', 'citation', 'math'].includes(type);
  }
}
