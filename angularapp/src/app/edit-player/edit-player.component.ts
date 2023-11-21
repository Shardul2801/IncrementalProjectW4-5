import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  //editForm :FormGroup
  id:number
  playerdata :{id:number,name:string,age:number,category:string,biddingPrice:number}
 
  constructor(private fb :FormBuilder,private as : AdminService,private ar:ActivatedRoute) {}
 
    editForm = this.fb.group({
      name: ["",[Validators.required]],
      age: ["",[Validators.required]],
      category: ["",[Validators.required]],
      teamID : ["",[Validators.required]],
      biddingPrice: ["",[Validators.required]],
    });
 
 
 
   getPlayer(id :number){
    this.as.getPlayer(id).subscribe((data)=>{
     this.playerdata = data;
     console.log(id)
     console.log(this.playerdata)
    })
 
   }
 
   onSave(player : Player){
    this.playerdata = player
    this.as.editPlayer(this.playerdata).subscribe(()=>{
      alert("Record Edited successfully")
      console.log(this.playerdata)
    })
   }
 
 
  ngOnInit(): void {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getPlayer(this.id)
 
  }
 
}
 