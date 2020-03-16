import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSelectComponent } from './filter-select.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FilterSelectComponent', () => {
  let component: FilterSelectComponent;
  let fixture: ComponentFixture<FilterSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSelectComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.text =''
    expect(component).toBeTruthy();
  });
});
