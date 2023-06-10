import { Component, } from '@angular/core';
import { ContainerResultboxService } from './container-resultbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private containerResultboxService : ContainerResultboxService) {}

  getShowResultboxValueApp(): any{
    return this.containerResultboxService.getShowResultboxValue();
  }

  title = 'AngularProject';



}
