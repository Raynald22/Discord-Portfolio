import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.css']
})
export class DirectMessagesComponent implements OnInit {
  userImg = 'assets/img/friends.png'
  nitroImg = 'assets/img/discord-nitro.png'
  addImg = 'assets/img/add.png'
  muteIcon = 'assets/img/mute.png'
  deafenIcon = 'assets/img/deafen.png'

  faMicrophoneSlash = faMicrophoneSlash;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  introduction() {
    this.router.navigate(['/introduction']);
  }

  skills() {
    this.router.navigate(['/skills']);
  }

}
