import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCasasComponent } from './casas/agregar-casas/agregar-casas.component';
import { DetallesCasasComponent } from './casas/detalles-casas/detalles-casas.component';
import { EditarCasasComponent } from './casas/editar-casas/editar-casas.component';
import { IndiceCasasComponent } from './casas/indice-casas/indice-casas.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AgregarTerrenosComponent } from './terrenos/agregar-terrenos/agregar-terrenos.component';
import { EditarTerrenosComponent } from './terrenos/editar-terrenos/editar-terrenos.component';
import { IndiceTerrenosComponent } from './terrenos/indice-terrenos/indice-terrenos.component';

const routes: Routes = [
  {path: '', component: IndiceCasasComponent},

  {path: 'casas', component: IndiceCasasComponent},
  {path: 'casas/agregar', component: AgregarCasasComponent},
  {path: 'casas/editar/:id', component: EditarCasasComponent},
  {path: 'casas/detalles/:id', component: DetallesCasasComponent},

  {path: 'terrenos', component: IndiceTerrenosComponent},
  {path: 'terrenos/agregar', component: AgregarTerrenosComponent},
  {path: 'terrenos/editar/:id', component: EditarTerrenosComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
