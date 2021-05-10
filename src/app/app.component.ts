import { Component } from '@angular/core';
import{StoreService} from './services/store.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schedule-app';
  day = "Monday"; 
  public Current_date = Date.now(); 
  lectures : any[] = [];
  sch : any[] = [{
    'Day' : 'Monday',
    'schedule' : ['IDM-Inovation Design and Manufacturing','MCA-Microcontroller and Its Applications','IEM - Industrial Engineering & Mangement','Lunch_Break','Major_project'],
    'time' : ['9:30 - 10:20 AM','10:50 - 11:40 AM','12:10 - 12:50 PM','2:00 - 4:00 PM']
  },{
    'Day' : 'Tuesday',
    'schedule' : ['IR-1 _ Industrial Robotics-1','MI - Measurement & Instrument ','CN-Computer Networks','Lunch_Break','Mechatronics Lab'],
    'time' : ['9:30 - 10:20 AM','10:50 - 11:40 AM','12:10 - 12:50 PM','2:00 - 4:00 PM']
  },{
    'Day' : 'Wednesday',
    'schedule' : ['IDM-Inovation Design and Manufacturing','MI - Measurement & Instrument ','GDE - Group Discussion Hindi','Lunch_Break','orCAD lab'],
    'time' : ['9:30 - 10:20 AM','10:50 - 11:40 AM','12:10 - 12:50 PM','2:00 - 4:00 PM'],
  },{
    'Day' : 'Thrusday',
    'schedule' : ['IR-1 _ Industrial Robotics-1','MCA--Microcontroller and Its Applications','CN-Computer Networks','Lunch_Break','Industrial Robotics']
    ,'time' : ['9:30 - 10:20 AM','10:50 - 11:40 AM','12:10 - 12:50 PM','2:00 - 4:00 PM'],
  },{
    'Day' : 'Friday',
    'schedule' : ['Interaction with T & P Cell','GDH - Group Discussion Hindi','IEM - Industrial Engineering & Mangement','Lunch_Break','Embedded System lab']
    ,'time' : ['9:30 - 10:20 AM','10:50 - 11:40 AM','12:10 - 12:50 PM','2:00 - 4:00 PM'],
  }
];
=======
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
