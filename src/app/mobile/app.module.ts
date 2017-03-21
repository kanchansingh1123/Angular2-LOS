import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { TaskListService } from '../../providers/services/tasklist.service';

import { DashboardPage } from '../../pages/mobile/dashboard/dashboard';
import { HeaderPage } from '../../pages/mobile/header/header';
import { TaskListPage } from '../../pages/mobile/tasklist/tasklist';
import { TaskDetailsPage } from '../../pages/mobile/taskdetails/taskdetails';

@NgModule({
  declarations: [
    MyApp,
    HeaderPage,
    TaskListPage,
    TaskDetailsPage,
    DashboardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HeaderPage,
    TaskListPage,
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
export class MobileModule {}