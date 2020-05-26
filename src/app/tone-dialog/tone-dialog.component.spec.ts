import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneDialogComponent } from './tone-dialog.component';

describe('ToneDialogComponent', () => {
  let component: ToneDialogComponent;
  let fixture: ComponentFixture<ToneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
