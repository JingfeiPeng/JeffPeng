import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificDetailComponent } from './specific-detail.component';

describe('SpecificDetailComponent', () => {
  let component: SpecificDetailComponent;
  let fixture: ComponentFixture<SpecificDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
