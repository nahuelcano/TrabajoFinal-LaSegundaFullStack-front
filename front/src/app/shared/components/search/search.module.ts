import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';


@NgModule({
  declarations: [SearchComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[SearchComponent]
})
export class SearchModule { }
