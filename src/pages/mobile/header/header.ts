import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html'
})
export class HeaderPage {

  @Input() title: string;

  constructor(public navCtrl: NavController) {
	 
  }
}