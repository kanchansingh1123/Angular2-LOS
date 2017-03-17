import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskListService {
 
 constructor(public http: Http){}
 
 getTaskList(){
   return this.http.get('/assets/data/tasklist.json').map( res => res.json());
 }
}