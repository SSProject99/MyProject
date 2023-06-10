import { Component, OnInit } from '@angular/core';
import { ContainerResultboxService } from '../container-resultbox.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private containerResultboxService : ContainerResultboxService) {}

  getShowResultboxValueApp(): any{
    return this.containerResultboxService.getShowResultboxValue();
  }
  
  ngOnInit(): void {
  }

}
