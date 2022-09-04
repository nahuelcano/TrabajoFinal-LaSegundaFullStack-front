import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './shared/components/notfound/notfound.component';

import { AuthGuard } from '@gdp/shared/guards';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CartaComponent } from './modules/dashboard/components/carta/carta.component';
import { CarritoComponent } from './modules/dashboard/components/carrito/carrito.component';
import { ContactoComponent } from './modules/dashboard/components/contacto/contacto.component';
import { EdicionComponent } from './modules/dashboard/components';



const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  //ver
  {
    path: 'inicio',
    component:DashboardComponent,
  },
  // aca seria la carta del resto
  {
    path: 'carta',
    canLoad: [AuthGuard],
    component:CartaComponent,
  }, 
  // //aca seria la parte de la amb, que muestre las comidas/bebidas para editar o borrar
  {
    path: 'edicion',
    canLoad: [AuthGuard],
    component: EdicionComponent,
  },
  // //aca seria la parte de la caja/carrito
  {
    path: 'carrito',
    canLoad: [AuthGuard],
    component:CarritoComponent,
  }, 
  // // aca seria la parte de la contacto
  {
    path: 'contacto',
    canLoad: [AuthGuard],
    component:ContactoComponent
  },
 
  {
    path: '**',
    component: NotfoundComponent,
    loadChildren: () =>
      import('./shared/modules/components/components.module').then((m) => m.ComponentsModule),
    // redirectTo:
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
