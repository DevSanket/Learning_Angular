import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username="";

  constructor() { 
  }
  ngOnInit(): void {
    
  }

  // onChangeText(event:Event){
  //   this.username = (<HTMLInputElement>event.target).value;
  //   if(this.username){
  //     this.button_disable=false;
  //   }else{
  //     this.button_disable=true;
  //   }
  // }

  onClickButton(){
    this.username="";
  }

}
