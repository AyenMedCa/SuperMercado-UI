// src/app/supermercado-list/supermercado-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupermercadoService } from '../services/supermercado.service';
import { Supermercado } from '../interfaces/Supermercado';
import { AgregarSupermercadoDialogComponent } from '../agregar-supermercado-dialog/agregar-supermercado-dialog.component';
import {AuthService} from "../services/auth-service.service";

@Component({
  selector: 'app-supermercado-list',
  templateUrl: './supermercado-list.component.html',
  styleUrls: ['./supermercado-list.component.css']
})
export class SupermercadoListComponent implements OnInit {
  supermercados: Supermercado[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private supermercadoService: SupermercadoService,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getToken() !== null;
    if (this.isLoggedIn) {
      this.loadSupermercados();
    }
  }

  loadSupermercados(): void {
    this.supermercadoService.getSupermercados().subscribe((data: Supermercado[]) => {
      this.supermercados = data;
    });
  }

  openAddSupermercadoDialog(): void {
    const dialogRef = this.dialog.open(AgregarSupermercadoDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.supermercados.push(result);
      }
    });
  }
}
