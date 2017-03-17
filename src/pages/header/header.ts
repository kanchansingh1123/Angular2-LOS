import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html'
})
export class HeaderPage {
  public tasks : any ;
  constructor(public navCtrl: NavController) {
	 
  }
}