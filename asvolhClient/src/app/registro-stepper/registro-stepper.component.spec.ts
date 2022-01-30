import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroStepperComponent } from './registro-stepper.component';

describe('RegistroStepperComponent', () => {
  let component: RegistroStepperComponent;
  let fixture: ComponentFixture<RegistroStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
