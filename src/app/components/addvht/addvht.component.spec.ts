import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvhtComponent } from './addvht.component';

describe('AddvhtComponent', () => {
  let component: AddvhtComponent;
  let fixture: ComponentFixture<AddvhtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvhtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvhtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
