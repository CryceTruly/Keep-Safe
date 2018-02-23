import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsellorComponent } from './add-consellor.component';

describe('AddConsellorComponent', () => {
  let component: AddConsellorComponent;
  let fixture: ComponentFixture<AddConsellorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsellorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsellorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
