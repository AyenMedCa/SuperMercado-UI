import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CiudadService } from '../services/ciudad.service';
import { SupermercadoService } from '../services/supermercado.service';
import { Ciudad } from '../interfaces/Ciudad';
import { Supermercado } from '../interfaces/Supermercado';

@Component({
  selector: 'app-agregar-supermercado-dialog',
  templateUrl: './agregar-supermercado-dialog.component.html',
  styleUrls: ['./agregar-supermercado-dialog.component.css']
})
export class AgregarSupermercadoDialogComponent implements OnInit {
  supermercadoForm: FormGroup;
  ciudades: Ciudad[] = [];
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private ciudadService: CiudadService,
    private supermercadoService: SupermercadoService,
    public dialogRef: MatDialogRef<AgregarSupermercadoDialogComponent>
  ) {
    this.supermercadoForm = this.fb.group({
      nombre: [''],
      NIT: [''],
      direccion: [''],
      latitud: [''],
      longitud: [''],
      ciudad_id: [''],
      logo: ['']
    });
  }

  ngOnInit(): void {
    this.loadCiudades();
  }

  loadCiudades(): void {
    this.ciudadService.getList().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
  }

  onFileChange(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  onSubmit(): void {
    if (this.supermercadoForm.valid) {
      const formData = new FormData();
      formData.append('nombre', this.supermercadoForm.get('nombre')?.value);
      formData.append('NIT', this.supermercadoForm.get('NIT')?.value);
      formData.append('direccion', this.supermercadoForm.get('direccion')?.value);
      formData.append('latitud', this.supermercadoForm.get('latitud')?.value);
      formData.append('longitud', this.supermercadoForm.get('longitud')?.value);
      formData.append('ciudad_id', this.supermercadoForm.get('ciudad_id')?.value);

      if (this.selectedFile) {
        formData.append('logo', this.selectedFile);
      }

      this.supermercadoService.addSupermercado(formData).subscribe(supermercado => {
        this.dialogRef.close(supermercado);
      });
    }
  }
}
