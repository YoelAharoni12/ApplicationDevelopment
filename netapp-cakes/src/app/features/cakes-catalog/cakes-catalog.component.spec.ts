import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesCatalogComponent } from './cakes-catalog.component';

describe('CakesCatalogComponent', () => {
  let component: CakesCatalogComponent;
  let fixture: ComponentFixture<CakesCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakesCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
