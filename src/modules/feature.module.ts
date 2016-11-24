/**
 * Created by rr4 on 10/12/2016.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';

import {AppState, InternalStateType} from '../services/app.service';
import {ModuleSpecificService} from '../services/moduleSpecific.service';
import {About} from '../components/about';
import {FeatureComponent} from '../components/featureComp';
import {NoContent} from '../components/no-content';

import {SearchPipe} from '../Pipes/search.pipe';

import {ModuleSpecificRoutingModule} from './feature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModuleSpecificRoutingModule
  ],
  declarations: [
    About,
    NoContent,
    SearchPipe,
    FeatureComponent
  ],
  providers: [
    ModuleSpecificService
  ]
})

export class FeatureModule {
}
