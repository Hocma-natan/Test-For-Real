import { Injectable, Output } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Comput } from '../models/comput';
import { HttpClient } from '@angular/common/http';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputService {
  apiURL = 'http://localhost:3000/computs';
  constructor(private http: HttpClient) {

  }
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getComput(): Observable<Comput[]>{
    return this.http.get<Comput[]>(this.apiURL).pipe(retry(1), catchError(this.handleError));
  }
  getComputById(computId: number): Observable<Comput>{
    return this.http.get<Comput>(this.apiURL+'/'+computId).pipe(retry(1), catchError(this.handleError));
  }
  addComput(comput: Comput): Observable<Comput>{
    comput.dateAjout = new Date;
    return this.http.post<Comput>(this.apiURL, comput).pipe(retry(1), catchError(this.handleError));
  }
  deleteComput(computId: number): Observable<Comput>{
    return this.http.delete<Comput>(this.apiURL+'/'+computId).pipe(retry(1), catchError(this.handleError));
  }
  computEdit(comput: Comput): Observable<Comput>{
    return this.http.put<Comput>(this.apiURL+'/'+comput.id, comput).pipe(retry(1), catchError(this.handleError));
  }
}
