import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContainerResultboxService } from '../container-resultbox.service';

@Component({
  selector: 'app-resultbox',
  templateUrl: './resultbox.component.html',
  styleUrls: ['./resultbox.component.css']
})
export class ResultboxComponent implements OnInit {

  constructor(private containerResultboxService : ContainerResultboxService) {}

  resultHeading = "Result";
  copyIcon = "content_copy"
  copyMessage = "Copy result";
  encryptedText: any;

  // getEncryptedValueApp(): any{
  //   this.encryptedText = this.containerResultboxService.getEncryptedValue();
  // }

  inputIsEmpty(inputValue: any) {
    return inputValue == null || inputValue == "" || inputValue == undefined;
  }

  copyResult(copyText: any) {
    // For Desktop/System devices
    if (!this.inputIsEmpty(copyText.value)) {
      var range = document.createRange();
      range.selectNode(copyText);
      const selection = window.getSelection();
      if (selection !== null) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
      try {
        document.execCommand('copy');
        this.copyMessage = "Result copied!";
        this.copyIcon = "check";
      } catch (err) {
        console.error('Unable to copy result:', err);
      }
      if (selection !== null) {
        selection.removeAllRanges();
      }
      // For Moble devices
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(copyText.value);
    }
  };


  ngOnInit(): void {
    this.encryptedText = this.containerResultboxService.getEncryptedValue();
    this.containerResultboxService.encryptedValueUpdated.subscribe(value => {
      this.encryptedText = value;
    });
  }

}
