import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './shared/modules/components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './modules/auth/auth.module';




@NgModule({
  declarations: [AppComponent
  ],
  imports: [BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
