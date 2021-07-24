import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { casaDTO } from './casa';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL;

  public obtenerTodos(): Observable<casaDTO[]>{
    return this.http.get<casaDTO[]>(this.apiURL);
  }
}
