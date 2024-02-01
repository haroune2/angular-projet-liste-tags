import { Component } from '@angular/core';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrl: './liste-projets.component.css'
})
export class ListeProjetsComponent {
  projets: any[] = [];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
     this.projetService.getProjets().subscribe(projets => {
      this.projets = projets;
    });
  }
}
