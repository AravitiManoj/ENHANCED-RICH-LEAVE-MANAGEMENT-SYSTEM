import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdRejectComponent } from './std-reject.component';

describe('StdRejectComponent', () => {
  let component: StdRejectComponent;
  let fixture: ComponentFixture<StdRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
