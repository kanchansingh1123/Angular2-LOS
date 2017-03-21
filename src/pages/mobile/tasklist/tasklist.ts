import { Component, Input } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { TaskDetailsPage } from '../taskdetails/taskdetails';

@Component({
 selector: 'page-task-list',
 templateUrl: 'tasklist.html'
})

export class TaskListPage {
	 public task : any;
	 
	 constructor(public navCtrl: NavController, public navParams: NavParams) {
	 	this.task = this.navParams.get('task');
	 }

	 openApplication() {
	 	this.navCtrl.push(TaskDetailsPage);
	 }
}