import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvhtformComponent } from './addvhtform.component';

describe('AddvhtformComponent', () => {
  let component: AddvhtformComponent;
  let fixture: ComponentFixture<AddvhtformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvhtformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvhtformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
