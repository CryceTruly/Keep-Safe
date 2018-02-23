import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncillornavbarComponent } from './councillornavbar.component';

describe('CouncillornavbarComponent', () => {
  let component: CouncillornavbarComponent;
  let fixture: ComponentFixture<CouncillornavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncillornavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncillornavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
