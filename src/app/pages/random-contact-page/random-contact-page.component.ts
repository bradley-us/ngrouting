import { Component, OnInit } from '@angular/core';
import { IRandomUser, Results } from 'src/app/models/randomuser.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {

  contact: IRandomUser | undefined;

  constructor(private randomUserService: RandomUserService) { }

  async ngOnInit(): Promise<any> {
    await this.randomUserService.obtainRandomUser().subscribe((res: Results) => {
      this.contact = res.results[0];
    });
  }

  obtainNewContac() {
    // this.randomUserService.obtainRandomUser().subscribe((res: Results) => {
    //   this.contact = res.results[0];
    // },
    // (error: any) => console.log(`[ERROR]: ${error}`));

    this.randomUserService.obtainRandomUser().subscribe(
      {
        next: (res: Results) => {
          this.contact = res.results[0]; // Se lo pasaremos al RandomContact
        },
        error: (error: any) => console.log(`[ERROR]: ${error}`),
        complete: () => console.info('Petición de random contact terminada.')
      }
    )
  }

  obtainContactsList(n: number) {
    this.randomUserService.obtainRandomUsers(n).subscribe(
      {
        next: (res: Results) => {
          console.log(res);
        },
        error: (error: any) => console.log(`[ERROR]: ${error}`),
        complete: () => console.info('Petición de random contact terminada.')
      }
    )
  }
}
