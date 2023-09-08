import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyFirstServiceService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchData(): Observable<any>{
    return this.httpClient.get(this.apiUrl);
  }
}
