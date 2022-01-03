import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { adventureData } from './service/adventure-data';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {

  excursionData: any[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.excursionData = adventureData;
    console.log('excusionData', this.excursionData)
  }

  viewTour(excursion: string) {
    console.log('excursion', excursion);
    const dialogConfig = this.dialog.open(DialogComponent, {
      disableClose: false,
      // width: '500px',
      // height: '500px',
      data: {title: excursion}
    });
  }

}