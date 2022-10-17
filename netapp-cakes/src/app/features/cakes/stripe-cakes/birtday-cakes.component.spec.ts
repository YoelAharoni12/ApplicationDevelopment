import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeCakesComponent } from './stripe-cakes.component';

describe('BirtdayCakesComponent', () => {
  let component: StripeCakesComponent;
  let fixture: ComponentFixture<StripeCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripeCakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
