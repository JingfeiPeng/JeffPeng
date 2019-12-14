import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollScreenAnimationComponent } from './scroll-screen-animation.component';

describe('ScrollScreenAnimationComponent', () => {
  let component: ScrollScreenAnimationComponent;
  let fixture: ComponentFixture<ScrollScreenAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollScreenAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollScreenAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
