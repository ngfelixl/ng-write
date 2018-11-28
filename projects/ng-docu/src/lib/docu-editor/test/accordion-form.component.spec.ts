import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionFormComponent } from '../components/accordion-form.component';

describe('AccordionFormComponent', () => {
  let component: AccordionFormComponent;
  let fixture: ComponentFixture<AccordionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
