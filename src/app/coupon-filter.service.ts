import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponFilterService {
  private selectedFilterValue!: any;
  filterValueUpdated = new EventEmitter<string>();

  setFilterValue(value: any): void {
    this.selectedFilterValue = value;
    this.filterValueUpdated.emit(value);
  }

  constructor() { }
}
