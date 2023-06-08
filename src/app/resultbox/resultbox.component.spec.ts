import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultboxComponent } from './resultbox.component';

describe('ResultboxComponent', () => {
  let component: ResultboxComponent;
  let fixture: ComponentFixture<ResultboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
