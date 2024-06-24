// src/app/supermercado-list/supermercado-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupermercadoService } from '../services/supermercado.service';
import { Supermercado } from '../interfaces/Supermercado';
import { AgregarSupermercadoDialogComponent } from '../agregar-supermercado-dialog/agregar-supermercado-dialog.component';

@Component({
  selector: 'app-supermercado-list',
  templateUrl: './supermercado-list.component.html',
  styleUrls: ['./supermercado-list.component.css']
})
export class SupermercadoListComponent implements OnInit {
  supermercados: Supermercado[] = [];

  constructor(
    private supermercadoService: SupermercadoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadSupermercados();
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
