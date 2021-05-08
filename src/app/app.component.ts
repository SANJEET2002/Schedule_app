import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schedule-app';
  day = "";
  

  data = [{
    "day":"monday",
     "lectures": ["lecture1",'l2','l3'],
  },{
    "day":"tuesday",
    "lectures": ["phs",'lcs','break'],
  }];


  getSch(day:string){
    let index =  this.data.findIndex(function(data, index){
      return data.day === day;
    });
    console.log(this.data[index].lectures);
  }


}
