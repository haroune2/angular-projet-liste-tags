import { Component, Input } from '@angular/core';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-liste-projets',
  templateUrl: './liste-projets.component.html',
  styleUrl: './liste-projets.component.css'
})
export class ListeProjetsComponent {
   @Input() projects: any[] = [];

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {

  }
}
