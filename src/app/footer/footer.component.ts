import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerOptions = [{
    'name': 'Home',
    'active': true,
    'icon': 'home',
    'routingPath': '/container'
  },
  {
    'name': 'Search',
    'active': false,
    'icon': 'search',
    'routingPath': '/database'
  }];

  toggleIcon(icon: any) {
    this.footerOptions.forEach(function(button) {
      button.active = (button.name === icon);
    });
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
