import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: ['.white-text {color: white}']
})
export class DetailsComponent implements OnInit {
  showSecret = false;
  buttonClicks = [];
  totalButtonClicks = 0;

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetails(event) {
    this.buttonClicks.push(event.timeStamp);
    this.totalButtonClicks = this.buttonClicks.length;
    this.showSecret = !this.showSecret;
  }

}
