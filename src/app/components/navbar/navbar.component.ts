import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;
  isLoggedIn: boolean;
  username: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.isNavbarCollapsed = true;
    this.isLoggedIn = false;
    if (this.auth.userProfile) {
      this.username = this.auth.userProfile.nickname;
    } else {
      this.auth.getProfile((err, profile) => {
        this.username = profile.nickname;
      });
    }
  }

}
