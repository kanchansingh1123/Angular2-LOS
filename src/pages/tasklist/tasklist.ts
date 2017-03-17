import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
 selector: 'page-task-list',
 templateUrl: 'tasklist.html'
})

export class TaskListPage { 
	 @Input() task : any;
	 constructor(public navCtrl: NavController) {

	 }
}