import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color:white;
    }
    `]
    // styleUrls:['./server.component.css']
    // template:'<h1> These is Server page</h1>',
    // styles:[
    //     `
    //     h1:{
    //         color:red;    
    //     }
    //     `
    // ]
})

export class ServerComponent{
    serverId:number = 1;
    serverStatus:string = "offline"; 

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' :'offline';
    }
    getServerStatus():string{
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === "online" ? 'green' : 'red';
    }
}