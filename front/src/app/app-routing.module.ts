import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './shared/components/notfound/notfound.component';

import { AuthGuard } from '@gdp/shared/guards';

const routes: Routes = [
  {
    //hola, hacer una pagina de inicio bonita del bar Luna
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  // aca seria la carta del resto
  {
    path: 'carta',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./modules/carta/carta.module').then((m) => m.CartaModule),
  }, 
  //aca seria la parte de la amb, que muestre las comidas/bebidas para editar o borrar
  // {
  //   path: 'edit',
  //   canLoad: [AuthGuard],
  //   loadChildren: () =>
  //     import('./modules/')
  // },
  //aca seria la parte de la caja/carrito
  // {
  //   path: 'carrito',
  //   canLoad: [AuthGuard],
  //   loadChildren: () =>
  //     import('./modules/')
  // }, 
  //aca seria la parte de la contacto
  // {
  //   path: 'contacto',
  //   canLoad: [AuthGuard],
  //   loadChildren: () =>
  //     import('./modules/')
  // },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
