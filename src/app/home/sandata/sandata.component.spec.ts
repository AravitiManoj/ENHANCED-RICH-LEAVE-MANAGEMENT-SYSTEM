import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandataComponent } from './sandata.component';

describe('SandataComponent', () => {
  let component: SandataComponent;
  let fixture: ComponentFixture<SandataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
