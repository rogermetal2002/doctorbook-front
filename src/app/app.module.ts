import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoutorPageComponent } from './doutor-page/doutor-page.component';
import { PacientePageComponent } from './paciente-page/paciente-page.component';
import { RecepcaoPageComponent } from './recepcao-page/recepcao-page.component';
import { FinanceiroPageComponent } from './financeiro-page/financeiro-page.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';

//Imports da biblioteca Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    DoutorPageComponent,
    PacientePageComponent,
    RecepcaoPageComponent,
    FinanceiroPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatPaginatorModule
  ],


  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
