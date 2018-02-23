import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhealthunitComponent } from './addhealthunit.component';

describe('AddhealthunitComponent', () => {
  let component: AddhealthunitComponent;
  let fixture: ComponentFixture<AddhealthunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhealthunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhealthunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
