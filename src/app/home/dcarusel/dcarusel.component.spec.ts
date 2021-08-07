import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcaruselComponent } from './dcarusel.component';

describe('DcaruselComponent', () => {
  let component: DcaruselComponent;
  let fixture: ComponentFixture<DcaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcaruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
