import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule, MaterialModule } from '@gdp/shared/modules';
import { MatTabsModule } from '@angular/material/tabs';
import { CarritoComponent, CartaComponent, ContactoComponent, EdicionComponent,ProductosListBoxComponent, InfoComponent,AdminCartaComponent,AdminComponent,AdminUsuariosComponent,CardComponent } from '@gdp/dashboard/components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './components/usuario/usuario.component';



const components = [CarritoComponent,CartaComponent,ContactoComponent,EdicionComponent,ProductosListBoxComponent, InfoComponent, AdminComponent, AdminCartaComponent, AdminUsuariosComponent, CardComponent];

@NgModule({
  declarations: [DashboardComponent, ...components, ProductDetailsComponent, UsuarioComponent, CardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
    
  ], 
})
export class DashboardModule {}
