import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { IRandomUser, Results } from 'src/app/models/randomuser.interface';
import { RandomUserService } from 'src/app/services/random-user.service';
// import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  sexFilter: string = 'all';
  // contactsList: IContact[] = [];
  randomContactsList: IRandomUser[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private contactService: ContactService,
    private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    // Obtenemos los Query Params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam: ', params.sex)
      if(params.sex) {
        this.sexFilter = params.sex;

        if(params.sex === 'female' || params.sex === 'male') {
          this.randomUserService.obtainRandomUsers(10, this.sexFilter).subscribe(
            {
              next: (res: Results) => {
                res.results.forEach((randomContact: IRandomUser, i: number) => {
                  this.randomContactsList.push(randomContact);
                })
                console.log(this.randomContactsList)
              },
              error: (error: any) => console.log(`[ERROR]: ${error}`),
              complete: () => console.info('Petición de random contact terminada.')
            }
          )
        } else {
          // Implementación para obtener lista de contactos aleatorios
          this.randomUserService.obtainRandomUsers(10).subscribe(
            {
              next: (res: Results) => {
                res.results.forEach((randomContact: IRandomUser, i: number) => {
                  this.randomContactsList.push(randomContact);
                })
                console.log(this.randomContactsList)
              },
              error: (error: any) => console.log(`[ERROR]: ${error}`),
              complete: () => console.info('Petición de random contact terminada.')
            }
          )
        }
      }


      // this.contactService.obtainContacts(this.sexFilter)
      //   .then(
      //     (list) => this.contactsList = list
      //   )
      //   .catch((error) => console.log('Ha habido un error al obtener lista de todos: ', error))
      //   .finally(() => console.info('Petición de contactos terminada'));
    });
  }

  goBackHomeAndSelectHiddenFriend(contact: IRandomUser) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact
      }
    };

    this.router.navigate(['/home'], navigationExtras);
  }

}
