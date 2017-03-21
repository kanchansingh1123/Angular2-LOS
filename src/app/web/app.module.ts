import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AppRoutingModule } from './app.routing';

import { HomePage } from '../../pages/web/home/home';

import { MyApp } from './app.component';

import { TaskListService } from '../../providers/services/tasklist.service';


import { HeaderPage } from '../../pages/web/header/header';
import { DashboardPage } from '../../pages/web/dashboard/dashboard';
import { TaskListPage } from '../../pages/web/tasklist/tasklist';
import { CenterPage } from '../../pages/web/center/center';
import { TaskDetailsPage } from '../../pages/web/taskdetails/taskdetails';

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
    IonicModule.forRoot(MyApp),
    AppRoutingModule
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
export class WebModule {}