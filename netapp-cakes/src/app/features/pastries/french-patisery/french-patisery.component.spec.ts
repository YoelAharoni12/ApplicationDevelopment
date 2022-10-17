import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchPatiseryComponent } from './french-patisery.component';

describe('FrenchPatiseryComponent', () => {
  let component: FrenchPatiseryComponent;
  let fixture: ComponentFixture<FrenchPatiseryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenchPatiseryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchPatiseryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
