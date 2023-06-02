import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerOptions = [{
    'name': 'Home',
    'active': true,
    'icon': 'home'
  },
  {
    'name': 'Search',
    'active': false,
    'icon': 'search'
  },
  {
    'name': 'Library',
    'active': false,
    'icon': 'book'
  },
  {
    'name': 'Security',
    'active': false,
    'icon': 'lock'
  }];

  toggleIcon(icon: any) {
    this.footerOptions.forEach(function(button) {
      button.active = (button.name === icon);
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}