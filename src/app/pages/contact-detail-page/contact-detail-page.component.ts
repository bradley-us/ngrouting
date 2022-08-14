import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/contact.interface';
import { IRandomUser } from 'src/app/models/randomuser.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined;
  contact: IRandomUser | undefined;

  prevFilter: string = 'all';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Vamos a leer los parámetros
    this.route.params.subscribe(
      (params: any) => {
        if(params.id) {
          this.id = params.id
        }
      }
    );

    // this.route.parent?.params.
    if(history.state.data) {
      this.contact = history.state.data;
    }

    if(history.state.filter) {
      this.prevFilter = history.state.filter;
    }
  }

}
