import { Component, OnInit } from '@angular/core';
import { ContainerResultboxService } from '../container-resultbox.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private containerResultboxService : ContainerResultboxService) {}

  containerHeading = "Container heading";
  inputText = "";
  resultText = "";
  reverseText = "";

  clearInput() {
    this.inputText = "";
  }

  inputIsEmpty(inputValue: any) {
    return inputValue == null || inputValue == "" || inputValue == undefined;
  }

  encryptInput(inputTextNode: any) {
    if (!this.inputIsEmpty(inputTextNode.value)) {
      var reversedText = inputTextNode.value.split('').reverse().join('');
      var encryptedValue = this.caesarCipher(reversedText, 6);
      this.resultText = encryptedValue;
      this.containerResultboxService.setShowResultboxValue(true);
      this.containerResultboxService.setEncryptedValue(this.resultText);
    } else {      
      this.containerResultboxService.setShowResultboxValue(false);
    }
  }

  decryptInput(inputTextNode: any) {
    // this.showResult = "true";
    var cipherText = inputTextNode.value.replace(/\n/gmi, '\n');
    this.reverseText = this.caesarCipher(cipherText, -6);
    var decryptedValue = this.reverseText.split("").reverse().join("");
    this.resultText = decryptedValue;
    this.containerResultboxService.setEncryptedValue(this.resultText);
  }

  caesarCipher(encrText: any, key: any): any {
    var n = 26;
    if (key < 0) {
      return this.caesarCipher(encrText, key + n);
    }
    return encrText.split('').map(function (c: any) {
      if (c.match(/[a-z*]/i)) {
        var code = c.charCodeAt();
        var shift = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : 0;
        return String.fromCharCode(((code - shift + key) % n) + shift);
      }
      return c;
    }).join('');
  }


  ngOnInit(): void {
  }

}
