import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

 

  private apiUrlProjets = 'http://localhost:4200'; // Chemin vers le fichier JSON
  private apiUrlProjetsTags = 'http://localhost:4200/tags'; // Chemin vers le fichier JSON

  //private apiUrl = 'https://jsonplaceholder.typicode.com/todos';


  constructor(private http: HttpClient) {}

  getProjets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlProjets);
  }

  getTagsById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlProjetsTags}/${id}`);
  }



  
}
