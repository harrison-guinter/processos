import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPageComponent } from './cadastro-page/cadastro-page.component';
import { TelaListaComponent } from './tela-lista/tela-lista.component';

const routes: Routes = [
  { path: 'lista', component: TelaListaComponent },
  { path: "", redirectTo: "lista", pathMatch: "full" },
  { path: 'cadastro', component: CadastroPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
