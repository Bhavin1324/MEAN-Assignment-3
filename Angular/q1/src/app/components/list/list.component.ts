import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  items = ['Banana', 'Grapes', 'Papper', 'Nuts', 'Onion', 'Tomato', 'Potato'];
  currentItem: string = 'Banana';
  constructor() {}
  onChange(event: Event) {
    this.currentItem = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {}
}
