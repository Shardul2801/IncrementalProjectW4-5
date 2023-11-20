import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {

  playerdata:Player={id:0,name:"",age:0,teamId:0,category:"",biddingPrice:0}
  constructor(private playerservice:PlayerService,private router:Router) { }
  onSave(player:Player):void{
    this.playerdata=player
    
    this.playerservice.addPlayer(this.playerdata).subscribe(()=>{
      alert("Player Added Successfully!")
      console.log(this.playerdata);
      // this.router.navigate(['/listmovies'])

    })
  }

  ngOnInit(): void {
  }

}
