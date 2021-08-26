import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValuatorComponent } from './form-valuator.component';

describe('FormValuatorComponent', () => {
  let component: FormValuatorComponent;
  let fixture: ComponentFixture<FormValuatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValuatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValuatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
