import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from './../../app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
