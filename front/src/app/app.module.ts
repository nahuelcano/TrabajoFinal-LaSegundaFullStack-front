import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules';
import { ComponentsModule } from './shared/modules/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
// Componentes de la pagina
import { NavbarComponent, EdicionComponent, CartaComponent,CarritoComponent,ContactoComponent,ProductosListBoxComponent,ProductDetailsComponent } from './modules/dashboard/components';
import { ProductoService } from './shared/services/productos.service';

import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [AppComponent,DashboardComponent, NavbarComponent, EdicionComponent,CartaComponent,CarritoComponent,ContactoComponent, ProductosListBoxComponent,ProductDetailsComponent
  ],
  imports: [BrowserModule,
    AuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtXOLNW55nnYU7jGArMYIFZSxmIhrxmKE'
    })
    ],
  providers: [ProductoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
