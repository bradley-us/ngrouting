import { Pipe, PipeTransform } from '@angular/core';
import { IRandomUser } from '../models/randomuser.interface';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: IRandomUser, ...args: unknown[]): string {
    return `${ contact.name.title } ${ contact.name.first } ${ contact.name.last }`;
  }

}
