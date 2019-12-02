import { Component, OnInit } from '@angular/core';
import * as firebase from 'nativescript-plugin-firebase';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase
      .init()
      .then(() => console.log('firebase initialized'))
      .catch(err => console.log('error on initialize firebase', err));
  }
}
