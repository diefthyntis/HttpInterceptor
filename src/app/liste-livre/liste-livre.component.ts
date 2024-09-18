import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livre } from '../models/livre.class';
import { LivreService } from '../services/livre.service';




@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.scss']
})
export class ListeLivreComponent implements OnInit {
  listeLivre:Livre[]=[];
  private databaseUrl = './assets/livres.json';
  public requeteGet$!: Observable<any>;
  public requetePost$!:Observable<any>;
  public resultatPost!:Subscription;

  constructor(private http: HttpClient,private livreService: LivreService) { }

  ngOnInit(): void {
    
    this.requeteGet$ =this.http.get<Livre>(this.databaseUrl)

    this.requeteGet$.subscribe(tableau=> {
      tableau.forEach((instance:Livre)=> this.listeLivre.push(instance));
      });
      
      console.log("Dans NgOnInit");
      //this.chargerListe();
  }

  chargerListe():void {
    let livre1 = new Livre(6, 'Le Petit Prince', 'Antoine de Saint-Exupéry');
    let livre2 = new Livre(7, 'Les Misérables', 'Victor Hugo');
    let livre3 = new Livre(8, '1984', 'George Orwell');
    
    // Ajout des livres dans le tableau au fur et à mesure
    this.listeLivre.push(livre1);
    this.listeLivre.push(livre2);
    this.listeLivre.push(livre3);
    console.log(livre1);

  }

   // Fonction pour modifier un livre
   modifierLivre() {
    const unLivre = {
      id: 10,
      titre: 'Le portrait de Dorian Gray',
      auteur: 'Oscar Wilde'
    };
    this.requetePost$ = this.livreService.modifierLivre(unLivre);
    console.log(unLivre);
    this.resultatPost = this.requetePost$.subscribe();
  
  }


}
