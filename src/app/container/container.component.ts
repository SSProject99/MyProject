import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  containerHeading = "Container heading";
  inputText = "";

  clearInput() {
    this.inputText = "";
}

encryptInput() {

}

decryptInput() {
  
}
  constructor() { }

  ngOnInit(): void {
  }

}
