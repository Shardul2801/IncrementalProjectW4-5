import { Injectable } from '@angular/core';
import { Player } from 'src/models/player.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from 'src/models/team.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url= "https://8080-abdddcaefddefefacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
  
  constructor(private httpclient:HttpClient) { }
  getPlayers():Observable<Player[]>{
   return this.httpclient.get<Player[]>(this.url + '/GetPlayers')
  }

  getPlayer(id:number):Observable<Player>{
    return this.httpclient.get<Player>(this.url + '/GetPlayer/' + id);
  }

  httpOptions={headers:new HttpHeaders({'content-type':'application/json'})}

  addPlayer(player:Player):Observable<Player>{
    return this.httpclient.post<Player>(this.url+'/AddPlayer',player,this.httpOptions)
  }

  getTeams():Observable<Team[]>{
    return this.httpclient.get<Team[]>(this.url+'/GetTeams')
  }

  createTeam(newTeam:Team):Observable<Team>{
    return this.httpclient.post<Team>(this.url + '/AddTeam',newTeam,this.httpOptions)
  }

  editPlayer(player:Player):Observable<Player>{
    return this.httpclient.put<Player>(this.url + '/EditPlayer/' +player.id,player,this.httpOptions);
  }

  deletePlayer(id:number):Observable<Player>{
    return this.httpclient.delete<Player>(this.url + '/DeletePlayer/' + id);
  }
}
