import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TaskListService } from '../../../providers/services/tasklist.service';

import { TaskListPage } from '../tasklist/tasklist';



@Component({
	selector: 'page-dashboard',
	templateUrl: 'dashboard.html'
})

export class DashboardPage {
	public pushPage : any;
	public tasks : any ;

	constructor(public navCtrl: NavController, public taskListService: TaskListService) {
		this.pushPage = TaskListPage;
	}

	goToOtherPage() {
	    this.navCtrl.push(TaskListPage, {task : this.tasks});
	}

	ngOnInit(){
	  this.taskListService.getTaskList()
	 	.subscribe(
		 	data => this.tasks = data.taskList,
		 	error => console.log("Error while fetching data")
	 	);
	}
}