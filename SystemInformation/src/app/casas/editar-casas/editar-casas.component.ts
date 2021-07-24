import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { casaCreacionDTO, casaDTO } from '../casa';

@Component({
  selector: 'app-editar-casas',
  templateUrl: './editar-casas.component.html',
  styleUrls: ['./editar-casas.component.css']
})
export class EditarCasasComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  modelo: casaDTO = {id: 15, nombre: 'casaGrupitoo', descripcion:'con fe funciona', foto: 'https://www.bienesonline.com/bolivia/photos/casas-y-terrenos-en-venta-desde-us-70000--11539699708.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }

  guardarCambios(casa: casaCreacionDTO){
    console.log(casa);
  }

}
