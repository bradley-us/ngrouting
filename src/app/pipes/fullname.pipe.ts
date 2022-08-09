import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../models/contact.interface';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: IContact, ...args: unknown[]): string {
    return `${ contact.name } ${ contact.lastName }`;
  }

}
