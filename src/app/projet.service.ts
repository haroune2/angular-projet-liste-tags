import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor() { }

  private projets = [
    { id: 1, nom: 'Projet 1', tags: ['tag1', 'tag2'] },
    { id: 2, nom: 'Projet 2', tags: ['tag3', 'tag4'] },

  ];

  getProjets(): Observable<any[]> {
    return of(this.projets);
  }


  getTagsById(id: string): Observable<string[]> {
    for (const projet of this.projets) {
      if (projet.id.toString() === id) {
        return of(projet.tags);
      }
    }
    return of([]); // Retourne un tableau vide si aucun projet  n'est trouvé
  }

  
}
