import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialCookiesComponent } from './special-cookies.component';

describe('SpecialCookiesComponent', () => {
  let component: SpecialCookiesComponent;
  let fixture: ComponentFixture<SpecialCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
