import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = 'aLanNeSTnéle27aoAut19SoixanteTrEIze';
  
  getToken(): string {
    return this.token;
  }
}