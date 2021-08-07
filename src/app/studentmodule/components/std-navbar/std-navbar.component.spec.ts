import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdNavbarComponent } from './std-navbar.component';

describe('StdNavbarComponent', () => {
  let component: StdNavbarComponent;
  let fixture: ComponentFixture<StdNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
