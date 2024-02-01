import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-liste-tags',
  templateUrl: './liste-tags.component.html',
  styleUrl: './liste-tags.component.css'
})
export class ListeTagsComponent {


  tags: string[] = [];

  constructor(private route: ActivatedRoute, private projetService: ProjetService) { }

  ngOnInit(): void {
    // Récupère l'ID du projet à partir de l'URL
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id')  +" params.get('id') ");
      
      const projectId: string = params.get('id') || '';

      // Appel du service pour obtenir les tags du projet spécifique
      this.projetService.getTagsById(projectId).subscribe((data) => {
        console.log(data);
        
        this.tags = data;
      });
    });
  }
}
