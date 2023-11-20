import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http';
import { ListPlayersComponent } from './list-players/list-players.component';
import { AddPlayersComponent } from './add-players/add-players.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPlayersComponent,
    AddPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
