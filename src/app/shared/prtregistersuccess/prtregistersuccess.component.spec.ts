import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrtregistersuccessComponent } from './prtregistersuccess.component';

describe('PrtregistersuccessComponent', () => {
  let component: PrtregistersuccessComponent;
  let fixture: ComponentFixture<PrtregistersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrtregistersuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrtregistersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
