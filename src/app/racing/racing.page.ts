import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Browser } from '@capacitor/browser';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.page.html',
  styleUrls: ['./racing.page.scss'],
})
export class RacingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //opens browser window to the the formula1 website
  async openBrowser(){
    await Browser.open({url: 'https://www.formula1.com/en/latest.html'});
  }

}
