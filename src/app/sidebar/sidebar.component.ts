import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  discordImg = 'assets/img/discord-mark-white.png'
  plusImg = 'assets/img/plus.png'

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['/home']);
  }

}
