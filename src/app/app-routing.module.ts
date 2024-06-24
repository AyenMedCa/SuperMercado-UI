import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { SupermercadoListComponent } from './supermercado-list/supermercado-list.component';
import { HomeComponent } from './home/home.component';
import {RegistroComponent} from "./registro/registro.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ciudades', component: CiudadesComponent },
  { path: 'supermercados', component: SupermercadoListComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
