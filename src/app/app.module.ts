import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './interceptors';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListeLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [        
    { provide: LOCALE_ID, useValue: 'fr-FR' },httpInterceptorProviders
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Un provider est un objet que l'on déclare à Angular 
pour qu'il puisse l'injecter à différentes endroits de l'application.
Ajouter httpInterceptorProviders dans les provides de app.module.ts
indique à ANGULAR qu'il doit gérer un service d'autorisation

*/