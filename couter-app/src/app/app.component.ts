import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : String = 'Counter App';

  count: number = 0;

  handleIncrease = () => {
    this.count++;
  }

  handleDecrease = () => {
    if(this.count > 0){
      this.count--;
    }
  }

  handleReset = () => {
    this.count = 0;
  }

}
