import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto.component';

import { AuthGuard } from '@gdp/shared/guards';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ContactoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoRoutingModule {}
