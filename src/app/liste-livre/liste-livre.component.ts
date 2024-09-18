import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livre } from '../livre.class';



@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.scss']
})
export class ListeLivreComponent implements OnInit {
  listeLivre:Livre[]=[];
  private databaseUrl = './assets/book.json';
  public requete$!: Observable<any>;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.requete$ =this.http.get<Livre>(this.databaseUrl)

    this.requete$.subscribe(tableau=> {
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


}
