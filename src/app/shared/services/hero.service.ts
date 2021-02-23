import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = `api/heroes`; // URL to web API

  constructor(private httpClient: HttpClient) { }

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl);
  }
}
