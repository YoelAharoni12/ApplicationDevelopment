import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateMousseComponent } from './chocolate-mousse.component';

describe('ChocolateMousseComponent', () => {
  let component: ChocolateMousseComponent;
  let fixture: ComponentFixture<ChocolateMousseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateMousseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateMousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
