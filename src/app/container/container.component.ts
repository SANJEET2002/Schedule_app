import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() public teacher: any;
  @Input() public class :any;
  @Input() public time :any;
  @Input() public link:any;
  @Input() public newTime : any ;
  constructor() { }

  ngOnInit(): void {
   
  }



}
