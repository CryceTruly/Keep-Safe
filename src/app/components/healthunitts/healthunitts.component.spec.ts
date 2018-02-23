import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthunittsComponent } from './healthunitts.component';

describe('HealthunittsComponent', () => {
  let component: HealthunittsComponent;
  let fixture: ComponentFixture<HealthunittsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthunittsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthunittsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
