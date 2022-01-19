import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVoluntariadoComponent } from './registro-voluntariado.component';

describe('RegistroVoluntariadoComponent', () => {
  let component: RegistroVoluntariadoComponent;
  let fixture: ComponentFixture<RegistroVoluntariadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVoluntariadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVoluntariadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
