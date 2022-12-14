import { Component, OnInit } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';
import { IRandomUser } from 'src/app/models/randomuser.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  selectedContact: IRandomUser | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Leemos el estado del historial de navegación
    if(history.state.data) {
      this.selectedContact = history.state.data;
    }
  }

  navigateToContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sex: 'all'
      }
    }
    this.router.navigate(['dashboard/contacts'], navigationExtras)
  }
}
