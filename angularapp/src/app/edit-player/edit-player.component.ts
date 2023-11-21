import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Player } from 'src/models/player.model';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  editform:FormGroup
  id:number
  playerdata:{id:number,name:string,age:number,category:string,biddingPrice:number}
  constructor(private adminservice:AdminService, private ar:ActivatedRoute) {
    this.editform = new FormGroup({
      id: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required]),
      category: new FormControl("",[Validators.required]),
      biddingPrice: new FormControl("",[Validators.required]),
    })
   }
  

  ngOnInit(): void {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getPlayer(this.id);
  }

  getPlayer(id:number){
    this.adminservice.getPlayer(id).subscribe((data)=>{
      this.playerdata = data;
    })
  }

  onSave(){
    this.playerdata = this.editform.value
    this.adminservice.editPlayer(this.playerdata).subscribe(()=>{
      alert("Record Edited Successfully!")
      console.log(this.playerdata);
    })
  }

}
