import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-terrenos',
  templateUrl: './agregar-terrenos.component.html',
  styleUrls: ['./agregar-terrenos.component.css']
})
export class AgregarTerrenosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(){
    // funcion para guardar cambios
    this.router.navigate(['/terrenos']);
  }

}
