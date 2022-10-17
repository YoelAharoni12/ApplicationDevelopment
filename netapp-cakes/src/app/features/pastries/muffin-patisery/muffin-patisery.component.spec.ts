import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuffinPatiseryComponent } from './muffin-patisery.component';

describe('MuffinPatiseryComponent', () => {
  let component: MuffinPatiseryComponent;
  let fixture: ComponentFixture<MuffinPatiseryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuffinPatiseryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuffinPatiseryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
