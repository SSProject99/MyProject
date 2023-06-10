import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacouponComponent } from './datacoupon.component';

describe('DatacouponComponent', () => {
  let component: DatacouponComponent;
  let fixture: ComponentFixture<DatacouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
