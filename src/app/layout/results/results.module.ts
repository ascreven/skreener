import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';

import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports: [
    ResultsComponent
  ]
})
export class ResultsModule { }
