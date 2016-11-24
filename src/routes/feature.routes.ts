import { Routes, RouterModule } from '@angular/router';
import { SearchEventCategoryComponent } from '../components/searchEventCategory';
import {SearchEventGridComponent} from '../components/searchEventGrid';
import { About } from '../components/about';
import { NoContent } from '../components/no-content';

export const ModuleSpecificRoutes: Routes = [
  /*{ path: 'EventCategories',  component: SearchEventCategoryComponent },
  { path: 'EventCategories/:EventCategory',  component: SearchEventGridComponent },
  { path: 'about', component: About },
  { path: '**',    component: NoContent },*/
];
