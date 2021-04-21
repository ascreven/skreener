import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from 'src/app/features/shows/shows.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ShowsRoutingModule,
    SharedModule
  ],
  declarations: [
    ShowsComponent
  ],
})
export class ShowsModule { }
