import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MovimientoEmpleadosComponent } from './movimiento-empleados/movimiento-empleados.component';
import { NominaComponent } from './nomina/nomina.component';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialDesingModule } from './material-desing/material-desing.module';
import { FooterComponent } from './footer/footer.component';
import { MediaItemsComponent } from './components/media-items/media-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpleadosComponent,
    MovimientoEmpleadosComponent,
    NominaComponent,
    FooterComponent,
    MediaItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MaterialDesingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
