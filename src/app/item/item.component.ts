import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

  @Input() item:string;

  @Output() removeItemEvent = new EventEmitter<string>();
  
  removeItem(item:string) {
    this.removeItemEvent.emit(item);
  }

  constructor() { }

  ngOnInit() {
  }

}
