import { Component, OnInit } from '@angular/core';
import { Team } from 'src/models/team.model';
import { AdminService } from '../services/admin.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  newTeam :Team={ id:0,name:"",maximumBudget:0}
  teamform:FormGroup
  constructor(private adminservice:AdminService) { 

  this.teamform = new FormGroup({
    name: new FormControl('',[Validators.required]),
    maximumBudget: new FormControl('',[Validators.required])
  })
  }

  onSave(){
    this.newTeam = this.teamform.value
    this.adminservice.createTeam(this.newTeam).subscribe(()=>{
      alert("Team Added Successfully")
      console.log(this.newTeam);
    })
  }

  ngOnInit(): void {

  }

}
