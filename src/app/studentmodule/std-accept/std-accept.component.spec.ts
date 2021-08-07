import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdAcceptComponent } from './std-accept.component';

describe('StdAcceptComponent', () => {
  let component: StdAcceptComponent;
  let fixture: ComponentFixture<StdAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
