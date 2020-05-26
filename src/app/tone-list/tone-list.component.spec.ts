import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneListComponent } from './tone-list.component';

describe('ToneListComponent', () => {
  let component: ToneListComponent;
  let fixture: ComponentFixture<ToneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
