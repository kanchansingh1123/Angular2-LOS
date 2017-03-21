/**
* To define routing (url) for each module.
* Routing uses hash location strategy, so you can see # in url
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskDetailsPage } from '../../pages/taskdetails/taskdetails';
import { CenterPage } from '../../pages/center/center';

const appRoutes: Routes = [
	{
		path:'', component : CenterPage
	},
	{
		path:'application', component : TaskDetailsPage
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes,{ useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}