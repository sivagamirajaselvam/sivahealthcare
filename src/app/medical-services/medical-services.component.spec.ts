import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalServicesComponent } from './medical-services.component';

describe('MedicalServicesComponent', () => {
  let component: MedicalServicesComponent;
  let fixture: ComponentFixture<MedicalServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalServicesComponent]
    });
    fixture = TestBed.createComponent(MedicalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
