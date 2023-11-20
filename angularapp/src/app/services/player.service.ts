import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { Player } from '../models/player.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private url= "https://8080-abdddcaefddefefacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
  
  constructor(private httpclient:HttpClient) { }
  getPlayers():Observable<Player[]>{
   return this.httpclient.get<Player[]>(this.url + '/GetPlayers')
  }

  httpOptions={headers:new HttpHeaders({'content-type':'application/json'})}

  addPlayer(player:Player):Observable<Player>{
    return this.httpclient.post<Player>('this.url'+'/AddPlayer',player,this.httpOptions)
  }
  
}
