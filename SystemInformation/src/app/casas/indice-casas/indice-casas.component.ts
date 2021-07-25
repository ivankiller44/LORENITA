import { Component, Input, OnInit } from '@angular/core';
import { casaDTO } from '../casa';
import { CasasService } from '../casas.service';

@Component({
  selector: 'app-indice-casas',
  templateUrl: './indice-casas.component.html',
  styleUrls: ['./indice-casas.component.css']
})
export class IndiceCasasComponent implements OnInit {

  listCasas: casaDTO[] = [];

  constructor(private casasService: CasasService) { }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.casas = [
        {
          id: 1, 
          nombre: 'Casa Villazon', 
          descripcion:'Cuenta con 4 cuartos 3 baños 1 cocina 1 sala y amplio patio con garage para 3 autos',
          precio: 150000, 
          dimensiones: '192 x 168', 
          ubicacion: 'Av. General Galindo', 
          contacto: 65467464,
          foto: 'https://staticw.s3.amazonaws.com/inmuebles/gr21005120180515052114.jpg'
        },
        {
          id: 2, 
          nombre: 'Casa Gota de Oro', 
          descripcion:'Cuenta con 2 cuartos 1 baños 1 cocina 1 sala y con garage para 1 auto',
          precio: 98000, 
          dimensiones: '130 x 95', 
          ubicacion: 'Av. 6 de Agosto', 
          contacto: 68765431,
          foto: 'https://www.casasparaconstruir.com/projetos/161/01.jpg'
        },
        {
          id: 3, 
          nombre: 'Casa Fox', 
          descripcion:'Cuenta con 3 cuartos 2 baños 1 cocina 1 sala y amplio patio con garage para 2 autos',
          precio: 115000, 
          dimensiones: '167 x 135', 
          ubicacion: 'Av. America', 
          contacto: 75343265,
          foto: 'https://sites.google.com/site/casaeconomicaenbolivia/_/rsrc/1301111240017/home/FACHADA%2088%20M2.%2011x8fondo.%20PORCH%20GARAGE.jpg'
        }
      ];
    }, 500);*/

    /*this.casasService.obtenerTodos()
    .subscribe(casas => {
      console.log(casas);
    }, error => console.error(error));*/  
    this.cargarCasas();
    console.log(this.listCasas);
  }

  //casas: casaDTO[] = [];

  casasMuestra;
  
  cargarCasas(){
    this.listCasas = this.casasService.getCasas();
  }

  remover(indiceCasa: number): void {
    this.casasMuestra.splice(indiceCasa, 1);
  }

}
