import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-taskdetails',
  templateUrl: 'taskdetails.html'
})
export class TaskDetailsPage {
  public tasks : any ;
  constructor(public navCtrl: NavController) {
	 
  }
}