import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdApplyleaveComponent } from './std-applyleave.component';

describe('StdApplyleaveComponent', () => {
  let component: StdApplyleaveComponent;
  let fixture: ComponentFixture<StdApplyleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdApplyleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdApplyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
