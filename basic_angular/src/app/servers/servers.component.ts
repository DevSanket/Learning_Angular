import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewserver_disable = true;
  serverCreationStatus = 'No Server was Created';
  serverName = 'TestServer';
  constructor() { 

    setTimeout(() => {
      this.allowNewserver_disable=false;
    },2000)

  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus ="Server Created Successfully";
  }

  onUpdateServerName(event : any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }
}
