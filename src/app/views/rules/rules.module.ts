import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class RulesModule { }
