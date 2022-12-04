import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AdministracionUsuariosModule } from './administracion-usuarios/administracion-usuarios.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdministracionUsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
