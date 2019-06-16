import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  testVar="Helloworld";
  fruits:string[] = ['Apple', 'Orange', 'Banana'];
  title = 'my-dream-app';

  addItem(newItem: string) {
    this.fruits.push(newItem);
  }

  removeItem(item: string) {
    this.fruits.pop(); 
    
  }

}
