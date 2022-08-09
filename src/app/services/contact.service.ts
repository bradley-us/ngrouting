import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.interface';
import CONTACT_LIST from '../mock/contacts.mock'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactsList: IContact[] = CONTACT_LIST;

  constructor() { }

  obtainContacts(sex?: string): Promise<IContact[]> {
    if(sex == 'man' || sex == 'woman') {
      let filteredList: IContact[] = this.contactsList.filter((contact) => contact.sex == sex);
      return Promise.resolve(filteredList);
    } else if(sex == 'all') {
      return Promise.resolve(this.contactsList);
    } else {
      return Promise.reject('Filtro no válido')
    }
  }
}
