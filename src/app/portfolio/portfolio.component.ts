import { Component } from '@angular/core';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects: any[] = [];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    // Chargez les projets ici initialement, ou lorsque cela est nécessaire
  }

  onPortfolioClick() {
    // Réagissez au clic sur le composant Portfolio
    this.projetService.getProjets().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des projets', error);
      }
    );
  }
}
