import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  allowNewUser = false;
  username = '';

  constructor() { }

  ngOnInit() {
  }

  onUpdateUsername() {
    this.username != '' ? this.allowNewUser = true : this.allowNewUser = false;
  }

  onNewUser() {
    this.username = '';
    this.allowNewUser = false;
  }

}
