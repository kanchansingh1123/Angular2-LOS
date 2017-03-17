import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TaskListService } from '../../providers/services/tasklist.service';

@Component({
  selector: 'page-center',
  templateUrl: 'center.html'
})
export class CenterPage {
	public tasks : any ;
	
	constructor(public navCtrl: NavController, public taskListService: TaskListService) {
	  
	}

	ngOnInit(){
	  this.taskListService.getTaskList()
	 	.subscribe(
		 	data => this.tasks = data.taskList,
		 	error => console.log("Error while fetching data")
	 	);
	}
}