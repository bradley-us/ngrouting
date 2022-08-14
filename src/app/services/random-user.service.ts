import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Results } from '../models/randomuser.interface';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error('Ha ocurrido un error ', error.error);
    } else {
      console.log('Error en el backend: ', error.status, '. El error es: ', error.error);
    }

    return throwError(() => new Error('Error en la patición de contacto aleatorio'));
  }

  obtainRandomUser(): Observable<Results> {
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), // Reintentos de peticiones
      catchError(this.handleError) // Sacamos error si algo falla
    );
  }

  obtainRandomUsers(n: number, sex?: string): Observable<Results> {
    let params: HttpParams = new HttpParams().set("results", n);

    if(sex) {
      params = params.append("gender", sex);
    }

    return this.http.get<Results>('https://randomuser.me/api', {params: params}).pipe(
      retry(2), // Reintentos de peticiones
      catchError(this.handleError) // Sacamos error si algo falla
    )
  }
}
