import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarErrorComponent } from './snack-bar-error.component';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

describe('SnackBarErrorComponent', () => {
  let component: SnackBarErrorComponent;
  let fixture: ComponentFixture<SnackBarErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarErrorComponent ],
      providers: [{
        provide: MatSnackBarRef,
        useValue: {}
        }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: {} // Add any data you wish to test if it is passed/used correctly
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
