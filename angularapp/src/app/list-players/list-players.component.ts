import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  players:Player[]=[]

  constructor(private playerservice:PlayerService) {
    
   }

  
  ngOnInit(): void {
   this.playerservice.getPlayers().subscribe((data)=>{this.players.push(...data)})
    
  }

  onDisplay():void{
    console.log(this.players);
  }

}
