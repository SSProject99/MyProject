import { Component, OnInit, } from '@angular/core';
declare var AllButtonProperties: any;


@Component({
  selector: 'app-contentbox',
  templateUrl: './contentbox.component.html',
  styleUrls: ['./contentbox.component.css']
})
export class ContentboxComponent implements OnInit {

  contentHeading = AllButtonProperties.contentHeading;
  contentText = AllButtonProperties.contentText;
  saveButtonText = AllButtonProperties.saveButtonProps.buttonText;
  cancelButtonText = AllButtonProperties.cancelButtonProps.buttonText;
  saveButtonStyle = AllButtonProperties.saveButtonProps.buttonStyle;
  cancelButtonStyle = AllButtonProperties.cancelButtonProps.buttonStyle;

  constructor() {
    console.log(AllButtonProperties);
  }

  ngOnInit(): void {
  }
}
