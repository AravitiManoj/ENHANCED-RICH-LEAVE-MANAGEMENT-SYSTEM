import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdContactComponent } from './std-contact.component';

describe('StdContactComponent', () => {
  let component: StdContactComponent;
  let fixture: ComponentFixture<StdContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
