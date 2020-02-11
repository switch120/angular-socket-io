import { SocketsService } from './sockets.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public collectedData = [];
  public title = 'angular-socket-io';

  constructor(
    private socket: SocketsService
  ) {
    // pass in pCubeId and subscribe to live output
    this.socket.getLiveData("12345abcde").subscribe(data => {
      // chunk received; aggregate
      this.collectedData.push(data);
    });

    // Not working yet - abandoning as concept seems solid despite bug    
    // this.socket.getHistoricalStream("9876edcba").subscribe(data => {
    //   console.log(`Stream chunk received: `, data);
    // });
  }
}
