import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-output-properties', 
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css']
})
export class InputOutputPropertiesComponent implements OnInit {

  selColor: string = '';
  recievedValue = '';

  constructor() { }

  ngOnInit() {
  }

  setColor(color){
    this.selColor = color;
  }

  RecievedParameters(value){
    this.recievedValue = value;
  }
}
