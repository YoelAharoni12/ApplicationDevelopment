import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateChipsComponent } from './chocolate-chips.component';

describe('ChocolateChipsComponent', () => {
  let component: ChocolateChipsComponent;
  let fixture: ComponentFixture<ChocolateChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
