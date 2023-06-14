import { Component, OnInit } from '@angular/core';
import { CouponFilterService } from '../coupon-filter.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-datacoupon',
  templateUrl: './datacoupon.component.html',
  styleUrls: ['./datacoupon.component.css']
})
export class DatacouponComponent implements OnInit {

  constructor(private couponFilterService : CouponFilterService, private dataService : DataService) { }

  filterValue : any;
  data:any = [];
  reverseText : any;
  resultText : any;
  decryptedDataObject:any = [];

  dataObject = [
    { "videoName": "RRR", "videoLink": "https://youtu.be/NgBoMJy386M", "couponType": "Video" },
    { "videoName": "BAAHUBALI-2", "videoLink": "https://youtu.be/G62HrubdD6o", "couponType": "Video" },
    { "videoName": "KGF-2", "videoLink": "https://www.youtube.com/embed/rLWOAxTiiGs", "couponType": "Text" },
    { "videoName": "Ala Vaikunthapurramuloo", "videoLink": "https://www.youtube.com/embed/teo-nyzA0ZU", "couponType": "URL" },
    { "videoName": "Magadheera", "videoLink": "https://www.youtube.com/embed/C_Cp0uYBmPY", "couponType": "Text" },
    { "videoName": "RRR", "videoLink": "https://youtu.be/NgBoMJy386M", "couponType": "Video" },
    { "videoName": "BAAHUBALI-2", "videoLink": "https://youtu.be/G62HrubdD6o", "couponType": "Video" },
    { "videoName": "KGF-2", "videoLink": "https://www.youtube.com/embed/rLWOAxTiiGs", "couponType": "Text" },
    { "videoName": "Ala Vaikunthapurramuloo", "videoLink": "https://www.youtube.com/embed/teo-nyzA0ZU", "couponType": "URL" },
    { "videoName": "Magadheera", "videoLink": "https://www.youtube.com/embed/C_Cp0uYBmPY", "couponType": "Text" }
  ];

  copyResult(copyText: any) {
    console.log(copyText);
    // For Desktop/System devices
    var range = document.createRange();
    range.selectNode(copyText);
    const selection = window.getSelection();
    if (selection !== null) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
    try {
      document.execCommand('copy');
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
  };

  displayDataFromDB() {
    this.dataService.getData().subscribe(
      (response) => {
        console.log(response);
        this.data = response;
        this.decryptInput(this.data);
      },
      (error) => {
        console.log('Error retrieving data:', error);
      }
    );
  };

  
  decryptInput(data : any) {
    for(let index in data){
      var cipherText = data[index].WatchXData.replace(/\n/gmi, '\n');
      this.reverseText = this.caesarCipher(cipherText, -6);
      var decryptedValue = this.reverseText.split("").reverse().join("");
      var dataType = this.checkInputType(decryptedValue);
      console.log(index, data[index].WatchXData,decryptedValue, dataType);
      let newData = { WatchXData: decryptedValue, couponType: dataType};
      this.decryptedDataObject.push(newData);
    }
  };

  checkInputType(input: string): string {
    const youtubeLinkPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    const urlPattern = /^(https?:\/\/)?([^\s/$.?#].[^\s]*)$/;
    const alphabeticPattern = /^[A-Za-z]+$/;
  
    if (youtubeLinkPattern.test(input)) {
      return "YoutubeLink";
    } else if (urlPattern.test(input)) {
      return "URL";
    } else if (alphabeticPattern.test(input)) {
      return "NormalText";
    } else {
      return "Unknown";
    }
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
    this.displayDataFromDB();
    this.filterValue = "All";
    this.couponFilterService.filterValueUpdated.subscribe(value => {
      this.filterValue = value;
    });
  }
}
