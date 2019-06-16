import { Component, OnInit, NgModule,  Output, EventEmitter} from '@angular/core';
import { todoItem } from '../todo-item';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

  model = new todoItem(1, 'einkaufen', false);

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
