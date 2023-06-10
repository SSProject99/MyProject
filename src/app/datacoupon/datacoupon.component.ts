import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datacoupon',
  templateUrl: './datacoupon.component.html',
  styleUrls: ['./datacoupon.component.css']
})
export class DatacouponComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videoObject = [
    {"videoName": "RRR", "videoLink" : "https://www.youtube.com/embed/8g4Z-JB8u_w"},
    {"videoName": "BAAHUBALI-2", "videoLink" : "https://youtu.be/G62HrubdD6o"},
    {"videoName": "KGF-2", "videoLink" : "https://www.youtube.com/embed/rLWOAxTiiGs"},
    {"videoName": "Ala Vaikunthapurramuloo", "videoLink" : "https://www.youtube.com/embed/teo-nyzA0ZU"},
    {"videoName": "Magadheera", "videoLink" : "https://www.youtube.com/embed/C_Cp0uYBmPY"}
  ];
  
}
