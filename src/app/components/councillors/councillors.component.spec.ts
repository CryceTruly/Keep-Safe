import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncillorsComponent } from './councillors.component';

describe('CouncillorsComponent', () => {
  let component: CouncillorsComponent;
  let fixture: ComponentFixture<CouncillorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncillorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncillorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
