import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {MarkdownModule} from 'ngx-markdown'

import {MaterialModule} from './material/material.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceTerrenosComponent } from './terrenos/indice-terrenos/indice-terrenos.component';
import { IndiceCasasComponent } from './casas/indice-casas/indice-casas.component';
import { AgregarTerrenosComponent } from './terrenos/agregar-terrenos/agregar-terrenos.component';
import { AgregarCasasComponent } from './casas/agregar-casas/agregar-casas.component';
import { EditarTerrenosComponent } from './terrenos/editar-terrenos/editar-terrenos.component';
import { EditarCasasComponent } from './casas/editar-casas/editar-casas.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { FormularioCasasComponent } from './casas/formulario-casas/formulario-casas.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    IndiceTerrenosComponent,
    IndiceCasasComponent,
    AgregarTerrenosComponent,
    AgregarCasasComponent,
    EditarTerrenosComponent,
    EditarCasasComponent,
    InputImgComponent,
    FormularioCasasComponent,
    InputMarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
