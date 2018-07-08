import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-template-outlet-demo',
  templateUrl: './ng-template-outlet-demo.component.html',
  styleUrls: ['./ng-template-outlet-demo.component.css']
})
export class NgTemplateOutletDemoComponent implements OnInit {
 
  colorset1 = {backColor:"lightpink"}
  colorset2 = {backColor:"lightgreen"} 
  constructor() { }

  ngOnInit() {
  }

}
