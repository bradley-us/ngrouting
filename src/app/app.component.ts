import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngRouting';

  token: string | null = '';

  constructor() {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }
}
