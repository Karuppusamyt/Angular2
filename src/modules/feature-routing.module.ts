/**
 * Created by rr4 on 10/12/2016.
 */
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {ModuleSpecificRoutes} from '../routes/feature.routes';

@NgModule({
  imports: [
    RouterModule.forChild(ModuleSpecificRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ModuleSpecificRoutingModule{}
