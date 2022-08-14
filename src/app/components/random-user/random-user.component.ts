import { Component, OnInit, Input } from '@angular/core';
import { IRandomUser, Results } from 'src/app/models/randomuser.interface';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  @Input() randomContact: IRandomUser | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
