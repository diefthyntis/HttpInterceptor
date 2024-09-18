import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';
import { ListeAuteurComponent } from './liste-auteur/liste-auteur.component';

const routes: Routes = [
  { path:"",component:ListeLivreComponent},
  { path:"auteur",component:ListeAuteurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
