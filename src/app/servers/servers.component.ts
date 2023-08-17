import { Component } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  ServerCreationStatus = "no server created";
  serverName = "TestServer";
  serverCreated = false;
  servers = ['server no 1', 'server no 2']

  constructor(){
    setTimeout (()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.ServerCreationStatus = 'Server was created! name is '+ this.serverName; 
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
