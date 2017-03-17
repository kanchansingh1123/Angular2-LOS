import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TaskListService } from '../providers/services/tasklist.service';


import { HeaderPage } from '../pages/header/header';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TaskListPage } from '../pages/tasklist/tasklist';
import { CenterPage } from '../pages/center/center';
import { TaskDetailsPage } from '../pages/taskdetails/taskdetails';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeaderPage,
    TaskListPage,
    CenterPage,
    TaskDetailsPage,
    DashboardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeaderPage,
    TaskListPage,
    CenterPage,
    TaskDetailsPage,
    DashboardPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }, TaskListService
  ]
})
export class AppModule {}
