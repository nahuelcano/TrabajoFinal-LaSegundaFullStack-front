import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './shared/components/notfound/notfound.component';

import { AuthGuard } from '@gdp/shared/guards';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CartaComponent } from './modules/dashboard/components/carta/carta.component';
import { CarritoComponent } from './modules/dashboard/components/carrito/carrito.component';
import { ContactoComponent } from './modules/dashboard/components/contacto/contacto.component';
import { EdicionComponent, ProductDetailsComponent, ProductosListBoxComponent, InfoComponent,UsuarioComponent,AdminComponent,AdminCartaComponent,AdminUsuariosComponent } from './modules/dashboard/components';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
   
  },
  //inicio
  {
    path: 'inicio',
    component:DashboardComponent,
  },
  // //aca seria la parte de la amb, que muestre las comidas/bebidas para editar o borrar
  // {
  //   path: 'edicion',
  //   canLoad: [AuthGuard],
  //   component: EdicionComponent,
  // },
  {
    path: 'admin-carta',
    canLoad: [AuthGuard],
    component:AdminCartaComponent,
  },
  {
    path: 'admin-usuario',
    canLoad: [AuthGuard],
    component:AdminUsuariosComponent,
  },
 //carta
  {
    path: 'carta',
    // canLoad: [AuthGuard],
    component:CartaComponent,
  },
  // {
    
  // },
  
  // caja/carrito
  {
    path: 'carrito',
    canLoad: [AuthGuard],
    component:CarritoComponent,
  }, 
  //contacto
  {
    path: 'contacto',
    canLoad: [AuthGuard],
    component:ContactoComponent
  },

  {
    path: 'productos',
    canLoad: [AuthGuard],
    component:ProductosListBoxComponent
  },

  {
    path: 'producto-detalle',
    canLoad: [AuthGuard],
    component:ProductDetailsComponent
  },
  //usuario
  {
    path: 'usuario',
    canLoad: [AuthGuard],
    component:UsuarioComponent
  },
  {
    path: 'aboutus',
    canLoad: [AuthGuard],
    component:InfoComponent,
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
