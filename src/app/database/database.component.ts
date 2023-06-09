import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  data!: any[];
  ngNameCol: any;
  ngRollCol: any;

  constructor(private dataService: DataService) { }

    ngOnInit(): void {
      this.displayDataFromDB();
    }

    displayDataFromDB() {
      this.dataService.getData().subscribe(
        (response) => {
          console.log(response);
          this.data = response;
        },
        (error) => {
          console.log('Error retrieving data:', error);
        }
      );
    }

    onSubmit(): void {
      const data = {
        ngName: this.ngNameCol,
        ngRoll: this.ngRollCol
      };
  
      this.dataService.insertData(data).subscribe(
        (response) => {
          console.log('Data inserted successfully:', response);
        },
        (error) => {
          console.log('Error inserting data:', error);
        }
      );
    }

  }
