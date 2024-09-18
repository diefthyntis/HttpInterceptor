import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'  // Cela garantit que le service est disponible dans toute l'application
  })
  
export class LivreService {
    private databaseUrl = './assets/livres.json';

    constructor(private http: HttpClient) { }
  
    // Méthode pour modifier un livre
    modifierLivre(plivre: any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.databaseUrl, plivre, { headers });
    }
  }