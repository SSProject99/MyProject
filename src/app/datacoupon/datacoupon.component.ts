import { Component, OnInit } from '@angular/core';
import { CouponFilterService } from '../coupon-filter.service';
@Component({
  selector: 'app-datacoupon',
  templateUrl: './datacoupon.component.html',
  styleUrls: ['./datacoupon.component.css']
})
export class DatacouponComponent implements OnInit {

  constructor(private couponFilterService : CouponFilterService) { }



  filterValue : any;

  dataObject = [
    { "videoName": "RRR", "videoLink": "https://youtu.be/NgBoMJy386M", "couponType": "Video" },
    { "videoName": "BAAHUBALI-2", "videoLink": "https://youtu.be/G62HrubdD6o", "couponType": "Video" },
    { "videoName": "KGF-2", "videoLink": "https://www.youtube.com/embed/rLWOAxTiiGs", "couponType": "Text" },
    { "videoName": "Ala Vaikunthapurramuloo", "videoLink": "https://www.youtube.com/embed/teo-nyzA0ZU", "couponType": "URL" },
    { "videoName": "Magadheera", "videoLink": "https://www.youtube.com/embed/C_Cp0uYBmPY", "couponType": "Text" }
  ];

  copyResult(copyText: any) {
    console.log(copyText);
    // For Desktop/System devices
    var range = document.createRange();
    range.selectNode(copyText);
    const selection = window.getSelection();
    if (selection !== null) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy result:', err);
    }
    if (selection !== null) {
      selection.removeAllRanges();
    }
    // For Moble devices
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
  };

  ngOnInit(): void {
    this.filterValue = this.couponFilterService.getFilterValue();
    this.couponFilterService.filterValueUpdated.subscribe(value => {
      this.filterValue = value;
    });
  }
}
