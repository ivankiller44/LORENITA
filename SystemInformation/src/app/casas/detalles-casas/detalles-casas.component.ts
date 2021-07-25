import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { casaDTO } from '../casa';
import { CasasService } from '../casas.service';

@Component({
  selector: 'app-detalles-casas',
  templateUrl: './detalles-casas.component.html',
  styleUrls: ['./detalles-casas.component.css']
})
export class DetallesCasasComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private casasService: CasasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  listCasas: casaDTO[] = [];

  ngOnInit(): void {
    this.listCasas = this.cargarCasas();
    console.log(this.listCasas);
  }

  cargarCasas(){
    this.listCasas = this.casasService.getCasas();
    var idNum;
    this.activatedRoute.params.subscribe(params => {
      idNum = params.id;
    })
    var newCadena = this.listCasas.filter((x) => {
      return x.id == idNum});
    return newCadena;
  }

}
