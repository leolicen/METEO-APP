import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoOraPerOraComponent } from './meteo-ora-per-ora.component';

describe('MeteoOraPerOraComponent', () => {
  let component: MeteoOraPerOraComponent;
  let fixture: ComponentFixture<MeteoOraPerOraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteoOraPerOraComponent]
    });
    fixture = TestBed.createComponent(MeteoOraPerOraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
