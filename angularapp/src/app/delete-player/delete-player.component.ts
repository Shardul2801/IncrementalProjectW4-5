import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {
  id:number
  playerdata:Player
  constructor(private playerservice:PlayerService, private ar:ActivatedRoute) { }

  getPlayer(id:number){
    this.playerservice.getPlayer(id).subscribe((data)=>{
      this.playerdata = data;
    })
  }


  ngOnInit(): void {
    const tid = this.ar.snapshot.paramMap.get('id');
    this.id = Number(tid);
    this.getPlayer(this.id);
  }

  

}
