import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import * as socketio from 'socket.io-client';
import * as socketioStream from 'socket.io-stream';
import { ReplaySubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  constructor() { }

  public getLiveData(pCubeId: string): Observable<any> {
    const dataObs$ = new ReplaySubject<any>(1);
    let socket = socketio(environment.socketUrl, { query: { pCubeId }});

    socket.on('liveData', (data: any) => {
      dataObs$.next(data);
    });

    return dataObs$;
  }

  // Abandoning POC 
  // public getHistoricalStream(pCubeId: string): Observable<any> {
  //   let socket = socketio(environment.socketUrl, { query: { pCubeId }});

  //   const stream = socketioStream.createStream();
 
  //   socketioStream(socket).emit('historical', stream, { name: "mockData.json" });

  //   return of().pipe(stream);
  // }
}
