import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { casaCreacionDTO, casaDTO } from '../casa';

@Component({
  selector: 'app-formulario-casas',
  templateUrl: './formulario-casas.component.html',
  styleUrls: ['./formulario-casas.component.css']
})
export class FormularioCasasComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  
  form: FormGroup;

  @Input()
  modelo: casaDTO;

  @Output()
  OnSubmit: EventEmitter<casaCreacionDTO> = new EventEmitter<casaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: '',
      foto: '',
      descripcion: ''
    })

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(file){
    this.form.get('foto').setValue(file);
  }

  cambioMarkdown(texto: string){
    this.form.get('descripcion').setValue(texto);
  }

  onSubmit() {
    this.OnSubmit.emit(this.form.value);
  }

}
