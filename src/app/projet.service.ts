import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private apiUrl = 'assets/projets.json'; // Chemin vers le fichier JSON


  constructor(private http: HttpClient) {}

  getProjets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTagsById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }



  
}
