import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules';
import {MatTableModule} from '@angular/material/table';
import { ComponentsModule } from './shared/modules/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Componentes de la pagina
import { NavbarComponent, EdicionComponent, CartaComponent,CarritoComponent,ContactoComponent,ProductosListBoxComponent,ProductDetailsComponent,AdminCartaComponent,AdminComponent,AdminUsuariosComponent,CardComponent, FiltroPipe } from './modules/dashboard/components';
import { ProductoService } from './shared/services/productos/productos.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { UserService } from './shared/services/user/user.service';
import { SearchModule } from './shared/components/search/search.module';
// import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [ AppComponent,DashboardComponent, NavbarComponent, EdicionComponent,CartaComponent,CarritoComponent,ContactoComponent, ProductosListBoxComponent,ProductDetailsComponent,AdminCartaComponent,AdminComponent,AdminUsuariosComponent,CardComponent, FiltroPipe
  ],
  imports: [BrowserModule,
    AuthModule,
    MaterialModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    SearchModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBtXOLNW55nnYU7jGArMYIFZSxmIhrxmKE'
    })
    ],
  providers: [ProductoService,UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
