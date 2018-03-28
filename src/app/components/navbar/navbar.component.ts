import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean;
  isLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
    this.isNavbarCollapsed = true;
    this.isLoggedIn = false;
  }

}
