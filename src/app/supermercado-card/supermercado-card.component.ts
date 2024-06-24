import { Component, Input, OnInit } from '@angular/core';
import { Supermercado } from '../interfaces/Supermercado';
import { CiudadService } from '../services/ciudad.service';
import { SupermercadoService } from '../services/supermercado.service';
import { Ciudad } from '../interfaces/Ciudad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supermercado-card',
  templateUrl: './supermercado-card.component.html',
  styleUrls: ['./supermercado-card.component.css']
})
export class SupermercadoCardComponent implements OnInit {
  @Input() supermercado!: Supermercado;
  ciudadNombre: string = '';

  constructor(
    private ciudadService: CiudadService,
    private supermercadoService: SupermercadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ciudadService.getCiudad(this.supermercado.ciudad_id).subscribe((ciudad: Ciudad) => {
      this.ciudadNombre = ciudad.nombre;
    });
  }

  onEdit(): void {
    this.router.navigate(['/editar-supermercado', this.supermercado.id]);
  }

  onDelete(): void {
    if (confirm('¿Está seguro de que desea eliminar este supermercado?')) {
      this.supermercadoService.deleteSupermercado(this.supermercado.id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
