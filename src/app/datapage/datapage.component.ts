import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.css']
})
export class DatapageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 70;
  }

}
