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
    'icon': 'home',
    'routingPath': '/container'
  },
  {
    'name': 'Library',
    'active': false,
    'icon': 'book',
    'routingPath': '/datapage'
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
