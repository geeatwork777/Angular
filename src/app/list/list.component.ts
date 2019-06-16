import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  @Input() list:string[];

  @Output() removeItemEvent = new EventEmitter<string>();

  removeItem(item: string) {
    this.removeItemEvent.emit(item);
    
  }

  constructor() { }

  ngOnInit() {
  }

}


