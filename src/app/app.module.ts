import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { CiudadService } from './services/ciudad.service';

import { AppComponent } from './app.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ImageRotatorComponent } from './image-rotator/image-rotator.component';
import { FooterComponent } from './footer/footer.component';
import { SupermercadoCardComponent } from './supermercado-card/supermercado-card.component';
import { SupermercadoListComponent } from './supermercado-list/supermercado-list.component';
import { HomeComponent } from './home/home.component';
import { AgregarSupermercadoDialogComponent } from './agregar-supermercado-dialog/agregar-supermercado-dialog.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    ImageRotatorComponent,
    FooterComponent,
    SupermercadoCardComponent,
    SupermercadoListComponent,
    HomeComponent,
    AgregarSupermercadoDialogComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ToolbarComponent,
    CiudadesComponent,
    FormsModule,
    CommonModule
  ],
  providers: [CiudadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
