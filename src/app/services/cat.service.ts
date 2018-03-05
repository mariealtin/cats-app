import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Cat } from '../models/cat';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CatService {
  private catsUrl = 'api/cats';
  
  constructor(private client: HttpClient) { }

  getCats (): Observable<Cat[]> {
    return this.client.get<Cat[]>(this.catsUrl).pipe(
      tap(cats => console.log(`Fetched cats`)),
      catchError(this.handleError('getCats', []))
    );
  }

  getCat(id: number): Observable<Cat> {
    const url = `${this.catsUrl}/${id}`;
    return this.client.get<Cat>(url).pipe(
      tap(_ => console.log(`Fetched cat with id=${id}`)),
      catchError(this.handleError<Cat>(`getCat with id=${id}`))
    );
  }
  
  updateCat(cat: Cat): Observable<any> {
    return this.client.put(this.catsUrl, cat, httpOptions).pipe(
      tap(_ => console.log(`Updated cat with id=${cat.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  createCat (cat: Cat): Observable<Cat> {
    return this.client.post<Cat>(this.catsUrl, cat, httpOptions).pipe(
      tap((cat: Cat) => console.log(`Created cat with id=${cat.id}`)),
      catchError(this.handleError<Cat>('createCat'))
    );
  }

  deleteCat(cat: Cat | number): Observable<Cat> {
    const id = typeof cat === 'number' ? cat : cat.id;
    const url = `${this.catsUrl}/${id}`;
    return this.client.delete<Cat>(url, httpOptions).pipe(
      tap(_ => console.log(`Deleted cat with id=${id}`)),
      catchError(this.handleError<Cat>('deleteCat'))
    );
  }

  private handleError<T> (task = 'Task', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${task} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
