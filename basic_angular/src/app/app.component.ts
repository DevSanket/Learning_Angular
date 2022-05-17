import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h3>These is App Component</h3>`,
  styleUrls: ['./app.component.css'],
  // styles:[
  //   `
  //   h3{
  //     color:dodgerblue;
  //   }
  //   `
  // ]
})
export class AppComponent {
  title = 'basic_angular';
  showSecret = false;
  log:number[]=[];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    // this.log.push(new Date());
  }
}
