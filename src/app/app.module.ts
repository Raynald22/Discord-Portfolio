import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { DirectMessagesComponent } from './direct-messages/direct-messages.component';
import { MainComponent } from './main/main.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideProfileComponent } from './side-profile/side-profile.component';
import { SkillsComponent } from './skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    DirectMessagesComponent,
    MainComponent,
    IntroductionComponent,
    NavbarComponent,
    SideProfileComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
