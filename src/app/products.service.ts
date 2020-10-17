import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BASE_URL_TOKEN } from './config';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
  'url': string;
  'albumId': number;
}

@Injectable()
export class ProductsServise {

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) {
    console.log(this.http);
  }
  public getProducts(): Observable<IProduct[]> {
    return this.http.get<any>(`${this.baseUrl}/photos`)
    .pipe(catchError(() => {
      return of([]);
    }))
  }
}
