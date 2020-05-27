import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneControlsComponent } from './tone-controls.component';

describe('ToneControlsComponent', () => {
  let component: ToneControlsComponent;
  let fixture: ComponentFixture<ToneControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToneControlsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
