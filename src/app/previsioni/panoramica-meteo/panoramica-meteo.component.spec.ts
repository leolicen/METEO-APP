import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramicaMeteoComponent } from './panoramica-meteo.component';

describe('PanoramicaMeteoComponent', () => {
  let component: PanoramicaMeteoComponent;
  let fixture: ComponentFixture<PanoramicaMeteoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanoramicaMeteoComponent]
    });
    fixture = TestBed.createComponent(PanoramicaMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
