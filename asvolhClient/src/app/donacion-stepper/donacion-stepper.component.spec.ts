import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionStepperComponent } from './donacion-stepper.component';

describe('DonacionStepperComponent', () => {
  let component: DonacionStepperComponent;
  let fixture: ComponentFixture<DonacionStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonacionStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
