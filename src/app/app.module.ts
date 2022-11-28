import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfiliadoFormComponent } from './components/afiliado-form/afiliado-form.component';
import { AfiliadoListComponent } from './components/afiliado-list/afiliado-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AfiliadoPreviewComponent } from './components/afiliado-preview/afiliado-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    AfiliadoFormComponent,
    AfiliadoListComponent,
    AfiliadoPreviewComponent,
    NavigationComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
