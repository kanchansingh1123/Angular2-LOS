import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Router } from '@angular/router';

@Component({
 selector: 'page-task-list',
 templateUrl: 'tasklist.html'
})

export class TaskListPage { 
	 @Input() task : any;
	 constructor(public navCtrl: NavController, public router: Router) {

	 }
	 openApplication() {
	 	this.router.navigate(['application']);
	 	//this.router.navigateByUrl('application');
	 }
}