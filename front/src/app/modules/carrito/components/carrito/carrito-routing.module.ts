import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito.component';

import { AuthGuard } from '@gdp/shared/guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: CarritoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoRoutingModule {}
