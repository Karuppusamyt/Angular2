/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(){
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
}

// needed for hmr
// in prod this is replace for document ready
bootloader(main);
