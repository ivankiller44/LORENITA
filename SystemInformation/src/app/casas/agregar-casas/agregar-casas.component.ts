import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { casaCreacionDTO } from '../casa';
import { CasasService } from '../casas.service';

@Component({
  selector: 'app-agregar-casas',
  templateUrl: './agregar-casas.component.html',
  styleUrls: ['./agregar-casas.component.css']
})
export class AgregarCasasComponent implements OnInit {

  constructor(private router: Router, 
    private formBuilder: FormBuilder,
    private casasService: CasasService) { }

  ngOnInit(): void {
    
  }

  guardarCambios(casa: casaCreacionDTO){
    /*this.casasService.crear(casa).subscribe(() => {
      this.router.navigate(['/casas']);
    }, error => console.error(error));*/
    console.log(casa);
  }

}
