import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Auteur } from '../models/auteur.class';


@Component({
  selector: 'app-liste-auteur',
  templateUrl: './liste-auteur.component.html',
  styleUrls: ['./liste-auteur.component.scss']
})
export class ListeAuteurComponent implements OnInit {

 listeAuteur:Auteur[]=[];
  private databaseUrl = './assets/auteurs.json';
  public requete$!: Observable<Auteur[]>;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.requete$ =this.getAuteur();

    this.requete$.subscribe(tableau=> {
      tableau.forEach((instance:Auteur)=> this.listeAuteur.push(instance));
      });

  }

  getAuteur(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(this.databaseUrl);
  }
  
  modifierAuteur():void {

  }
}





