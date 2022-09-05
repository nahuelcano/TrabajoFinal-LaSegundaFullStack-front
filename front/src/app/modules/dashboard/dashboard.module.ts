import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ComponentsModule, MaterialModule } from '@gdp/shared/modules';
import { MatTabsModule } from '@angular/material/tabs';
import {   CarritoComponent, CartaComponent, ContactoComponent, EdicionComponent,ProductosListBoxComponent } from '@gdp/dashboard/components';
import { FlexLayoutModule } from '@angular/flex-layout';



const components = [  CarritoComponent,CartaComponent,ContactoComponent,EdicionComponent,ProductosListBoxComponent];

@NgModule({
  declarations: [DashboardComponent, ...components ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
    FlexLayoutModule
    
  ],
})
export class DashboardModule {}
