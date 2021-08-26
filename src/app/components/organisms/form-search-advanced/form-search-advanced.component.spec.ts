import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchAdvancedComponent } from './form-search-advanced.component';

describe('FormSearchAdvancedComponent', () => {
  let component: FormSearchAdvancedComponent;
  let fixture: ComponentFixture<FormSearchAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSearchAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSearchAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
