import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracstatusComponent } from './tracstatus.component';

describe('TracstatusComponent', () => {
  let component: TracstatusComponent;
  let fixture: ComponentFixture<TracstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
