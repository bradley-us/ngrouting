import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  selectedContact: IContact | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Leemos el estado del historial de navegación
    if(history.state.data) {
      this.selectedContact = history.state.data;
    }
  }

  navigateToContacts(): void {
    this.router.navigate(['contacts'])
  }
}
