import { Component, OnInit } from '@angular/core';
import { Team } from 'src/models/team.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  constructor(private adminservice:AdminService) { }
  teams:Team[]=[]

  ngOnInit(): void {
    this.adminservice.getTeams().subscribe((data)=>{this.teams.push(...data)})
  }

}
