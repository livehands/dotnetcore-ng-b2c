import { Component, OnInit } from '@angular/core';
import { MsalService } from '../../services/msal/msal.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  user: any;
  constructor(private Msal: MsalService) { }

  ngOnInit() {
    this.user = this.Msal.getUser();
  }

}
