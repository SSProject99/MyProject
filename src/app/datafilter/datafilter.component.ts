import { Component, OnInit } from '@angular/core';
import { CouponFilterService } from '../coupon-filter.service';
import { MaterialModule } from '../material/material.module';
@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.css']
})
export class DatafilterComponent implements OnInit {

  filtersObject = [
    { "filterName": "All", "filterIcon" : "widgets"},
    { "filterName": "Video", "filterIcon" : "play_arrow" },
    { "filterName": "Text", "filterIcon" : "text_fields" },
    { "filterName": "Url", "filterIcon" : "link" },
  ];

  filterAppliedIcon = 'check';
  filterApplied = "All";
  unselectedFilterCol = "var(--filter-button-lite)";
  selectedFilterCol = "var(--button-pri-hover)";
  inactiveFilterColor = "var(--inactive-filter-color)"

  filterSelected(selectedFilterName: any) {
    this.filterApplied = selectedFilterName;
    this.couponFilterService.setFilterValue(selectedFilterName);
    console.log(selectedFilterName);
  }

  

  constructor(private couponFilterService: CouponFilterService) { }

  ngOnInit(): void {
  }

}
