import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './shared/modules/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
// Componentes de la pagina
import { NavbarComponent, EdicionComponent, CartaComponent,CarritoComponent,ContactoComponent,FooterComponent } from './modules/dashboard/components';
import { MaterialModule } from './shared/modules';

@NgModule({
  declarations: [AppComponent,DashboardComponent, NavbarComponent, EdicionComponent,CartaComponent,CarritoComponent,ContactoComponent, FooterComponent
  ],
  imports: [BrowserModule,
    AuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
