import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsFormComponent } from '../components/tabs-form.component';

describe('TabsFormComponent', () => {
  let component: TabsFormComponent;
  let fixture: ComponentFixture<TabsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
