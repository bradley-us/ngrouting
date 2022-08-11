import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  sexFilter: string = 'all';
  contactsList: IContact[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {

    // Obtenemos los Query Params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam: ', params.sex)
      if(params.sex) {
        this.sexFilter = params.sex
      }

      // Obtenemos la lista de contactos
      this.contactService.obtainContacts(this.sexFilter)
        .then(
          (list) => this.contactsList = list
        )
        .catch((error) => console.log('Ha habido un error al obtener lista de todos: ', error))
        .finally(() => console.info('Petición de contactos terminada'));
    })

  }

  goBackHomeAndSelectHiddenFriend(contact: IContact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact
      }
    };

    this.router.navigate(['/home'], navigationExtras);
  }

}
