import { Component, OnInit } from '@angular/core';
import {Ciudad} from "../interfaces/Ciudad";
import {CiudadService} from "../services/ciudad.service";
import {Observable} from "rxjs";
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class CiudadesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre'];
  dataSource: Ciudad[] = [];

  constructor(private ciudadService: CiudadService) { }

  ngOnInit(): void {
    this.ciudadService.getList().subscribe(data => {
      this.dataSource = data;
    });
  }
}

