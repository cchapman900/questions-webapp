import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;
  isLoggedIn: boolean;
  username: string = localStorage.getItem('username') ? localStorage.getItem('username') : '';

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.isNavbarCollapsed = true;
    this.isLoggedIn = false;
  }

}
