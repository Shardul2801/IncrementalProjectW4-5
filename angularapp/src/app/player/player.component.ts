import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }
  players:Player[]=[{id:1,name:"Shardul",age:20,category:"bowler",biddingPrice:20000},
  {id:2,name:"Rohit",age:22,category:"batsman",biddingPrice:30000},
  {id:3,name:"Tom",age:24,category:"bowler",biddingPrice:20000}]

  newPlayer:Player={id:4,name:"Jerry",age:20,category:"bowler",biddingPrice:200}
  ngOnInit(): void {
  }

}
