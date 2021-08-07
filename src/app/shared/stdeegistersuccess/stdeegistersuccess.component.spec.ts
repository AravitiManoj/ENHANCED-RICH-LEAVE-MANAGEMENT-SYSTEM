import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdeegistersuccessComponent } from './stdeegistersuccess.component';

describe('StdeegistersuccessComponent', () => {
  let component: StdeegistersuccessComponent;
  let fixture: ComponentFixture<StdeegistersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdeegistersuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdeegistersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
