import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { casaCreacionDTO } from '../casa';

@Component({
  selector: 'app-agregar-casas',
  templateUrl: './agregar-casas.component.html',
  styleUrls: ['./agregar-casas.component.css']
})
export class AgregarCasasComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  guardarCambios(casa: casaCreacionDTO){
    console.log(casa);
  }

}
