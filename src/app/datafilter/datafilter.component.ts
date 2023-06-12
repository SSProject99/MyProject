import { Component, OnInit } from '@angular/core';
import { CouponFilterService } from '../coupon-filter.service';
@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.css']
})
export class DatafilterComponent implements OnInit {

  filtersObject = [
    {"filterName" : "All"},
    {"filterName" : "Video"},
    {"filterName" : "Text"},
    {"filterName" : "Url"},
  ];

  filterAppliedIcon = 'check';
  filterApplied = "All";

  filterSelected(selectedFilterName: any){
  this.filterApplied = selectedFilterName;
  this.couponFilterService.setFilterValue(selectedFilterName);
    console.log(selectedFilterName)
  }

  constructor(private couponFilterService : CouponFilterService) { }

  ngOnInit(): void {
  }

}
