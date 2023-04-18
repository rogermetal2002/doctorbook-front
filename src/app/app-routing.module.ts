import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoutorPageComponent } from './doutor-page/doutor-page.component';
import { FinanceiroPageComponent } from './financeiro-page/financeiro-page.component';
import { HomeComponent } from './home/home.component';
import { PacientePageComponent } from './paciente-page/paciente-page.component';
import { RecepcaoPageComponent } from './recepcao-page/recepcao-page.component';

const routes: Routes = [
 
  {
    path:'paciente',
    component:PacientePageComponent
  },
  {
    path:'doutor',
    component:DoutorPageComponent
  },
  {
    path:'recepcao',
    component:RecepcaoPageComponent
  },
  {
    path:'financeiro',
    component:FinanceiroPageComponent
  },
  {
    path:'**',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
