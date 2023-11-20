import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.model';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {

  playerdata:Player={id:0,name:"",age:0,teamId:0,category:"",biddingPrice:0}
  playerform :FormGroup;
  constructor(private playerservice:PlayerService,private router:Router) { 
    this.playerform = new FormGroup ({
      name: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      teamId: new FormControl('',[Validators.required]),
      biddingPrice: new FormControl('',[Validators.required]),

    })
  }

  






  onSave():void{
    this.playerdata=this.playerform.value

    this.playerservice.addPlayer(this.playerdata).subscribe(()=>{
      alert("Player Added Successfully!")
      console.log(this.playerdata);
      // this.router.navigate(['/listmovies'])

    })
  }

  ngOnInit(): void {
  }

}
