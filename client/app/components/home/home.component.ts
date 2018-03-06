import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MsalService } from '../../services/msal/msal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  ngOnInit() { }

  constructor(private location: Location, private msalService: MsalService) { }

  login(): void {
    this.msalService.login();
  }

  logout(): void {
    this.msalService.logout();
  }

  isActive(viewLocation: any): boolean {
    return viewLocation === this.location.path();
  }

  isOnline(): boolean {
    return this.msalService.isOnline();
  };
}
