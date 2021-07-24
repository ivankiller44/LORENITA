import { Component, OnInit } from '@angular/core';
import { CasasService } from '../casas.service';

@Component({
  selector: 'app-indice-casas',
  templateUrl: './indice-casas.component.html',
  styleUrls: ['./indice-casas.component.css']
})
export class IndiceCasasComponent implements OnInit {

  constructor(private casasService: CasasService) { }

  ngOnInit(): void {
    this.casasService.obtenerTodos()
    .subscribe(casas => {
      console.log(casas);
    }, error => console.error(error));    
  }

}
