import { Component } from '@angular/core';
import{StoreService} from './services/store.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schedule-app';
public data = '';

  public monday:any[] = [];
  public tuesday:any[] = [];
  public wednesday:any[] = [];
  public thrusday:any[] = [];
  public friday:any[] = [];
  public result:any[] = [];
  public Current_date = Date.now(); 
  
  constructor(private _storeService : StoreService){
    this.monday = _storeService.getMonday();
    this.tuesday = _storeService.getTuesday();
    this.wednesday = _storeService.getWednesday();
    this.thrusday = _storeService.getThrusday();
    this.friday = _storeService.getFriday();
  };

  
  getDay(){
    if(this.data === 'monday'){
      this.result = this.monday;
    }
    if(this.data === 'tuesday'){
      this.result = this.tuesday;
    }
    if(this.data === 'wednesday'){
      this.result = this.wednesday;
    }
    if(this.data === 'thrusday'){
      this.result = this.thrusday;
    }
    if(this.data === 'friday'){
      this.result = this.friday;
    }
  }
}
