import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tasks : any ;
  constructor(public navCtrl: NavController) {
	  this.tasks =[
	  {
		  taskName: 'Task - 1',
		  applications:[
			  {'applicationName' : 'Application -1'},
			  {'applicationName' : 'Application -2'},
			  {'applicationName' : 'Application -3'}
		  ]
	  },
	  {
		  taskName: 'Task - 2',
		  applications:[
			  {'applicationName' : 'Application -1'},
			  {'applicationName' : 'Application -2'},
			  {'applicationName' : 'Application -3'}
			  ]
		  }
	  ];
  }

}
