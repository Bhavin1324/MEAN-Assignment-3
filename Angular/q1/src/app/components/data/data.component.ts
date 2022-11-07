import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  currentDate = new Date();
  todaysDate: number = new Date().getDate();
  constructor() {}

  ngOnInit(): void {}
}
