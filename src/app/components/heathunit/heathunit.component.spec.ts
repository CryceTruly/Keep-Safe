import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeathunitComponent } from './heathunit.component';

describe('HeathunitComponent', () => {
  let component: HeathunitComponent;
  let fixture: ComponentFixture<HeathunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeathunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeathunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
