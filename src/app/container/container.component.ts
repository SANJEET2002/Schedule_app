import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() public name: any;
  @Input() public newTime : any ;
  constructor() { }

  ngOnInit(): void {
   
  }



}
