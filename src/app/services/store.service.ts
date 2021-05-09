import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { };
public monday :any[] = [{'teacher':'chetanjit Singh','class':'IDM-Inovation Design and Manufacturing','time':'9:30 - 10:20 AM','link':'https://meet.google.com/gci-mxef-uve'},{
  'teacher':'N.S Aulakh','class':'MCA-Microcontroller and Its Applications','time':'10:50 - 11:40 AM','link':' ',},
  {'teacher':'Asha Rani','class':'IEM - Industrial Engineering & Mangement','time':'12:10 - 12:50 PM','link':'',},
  {'teacher':'Upendra Kumar','class':'Major Project','time':'2:00 - 4:00 PM','link':'',}];

  public tuesday : any[] = [{'teacher':'Kewal Kumar','class':'IR-1 _ Industrial Robotics-1','time':'9:30 - 10:20 AM','link':''},{
    'teacher':'Sanjay Kumar','class':'MI - Measurement & Instrument ','time':'10:50 - 11:40 AM','link':'',},
    {'teacher':'Kavita Singh','class':'CN-Computer Networks','time':'12:10 - 1:00 PM','link':'',},
    {'teacher':'Upendra Kumar','class':'Mechatronics Lab','time':'2:00 - 4:00PM','link':'',
  }];

  public wednesday : any[] = [
    {'teacher':'','class':'IDM-Inovation Design and Manufacturing','time':'9:30 - 10:20 AM','link':'https://meet.google.com/gci-mxef-uve'},
    {'teacher':'Sanjay Kumar','class':'MI - Measurement & Instrument ','time':'10:50 - 11:40 AM','link':'',},
    {'teacher':'Ritu Sharma','class':'GDE - Group Discussion Hindi','time':'12:10- 1:00PM','link':'',},
    {'teacher':'Durgesh Mishra','class':'','time':'2:00 - 4:00PM','link':'',}];

  public thrusday : any[] = [{'teacher':'Kewal Kumar','class':'IR-1 _ Industrial Robotics-1','time':'9:30 - 10:20 AM','link':''},
  {'teacher':'N.S Aulakh','class':'MCA-Microcontroller and Its Applications','time':'10:50 - 11:40 AM','link':'',},
  {'teacher':'Kavita Singh','class':'CN-Computer Networks','time':'12:10 - 1:00 PM','link':'',},
  {'teacher':'Kewal Kumar','class':'IR-1 _ Industrial Robotics-1 LAB','time':'9:30 - 10:20 AM','link':''},
  ];

  public friday : any[] = [{'teacher':'Kewal Kumar','class':'Interaction with T & P Cell','time':'9:30 - 10:20 AM','link':''},
  {'teacher':'DOlly Awasthi','class':'GDH - Group Discussion Hindi','time':'10:50 - 11:40 AM','link':'',},
  {'teacher':'Asha Rani','class':'IEM - Industrial Engineering & Mangement','time':'12:10 - 12:50 PM','link':'',}, 
  {'teacher':'Sanjay Kumar','class':'Embedded Systems Lab','time':'2:00 - 4:00 PM','link':''}];


  getMonday(){
    return this.monday;
  }
  
  getTuesday(){
    return this.tuesday;
  }
  
  getWednesday(){
    return this.wednesday;
  }
  
  getThrusday(){
    return this.thrusday;
  }
  
  getFriday(){
    return this.friday;
  }

};