import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTeamComponent } from './add-team/add-team.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { ListTeamComponent } from './list-team/list-team.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    AddPlayersComponent,
    AddTeamComponent,
    HomeComponent,
    PlayerComponent,
    ListTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
