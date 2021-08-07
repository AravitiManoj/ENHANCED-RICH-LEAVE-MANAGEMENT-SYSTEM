import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdStatusComponent } from './std-status.component';

describe('StdStatusComponent', () => {
  let component: StdStatusComponent;
  let fixture: ComponentFixture<StdStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
