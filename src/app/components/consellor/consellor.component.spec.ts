import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsellorComponent } from './consellor.component';

describe('ConsellorComponent', () => {
  let component: ConsellorComponent;
  let fixture: ComponentFixture<ConsellorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsellorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsellorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
