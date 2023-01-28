import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
   @Input() text: string="";
   @Input() color: string="";
   @Output () btnclick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  this.btnclick.emit();
  
}
}