import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {IndexModule} from './index.module';

platformBrowserDynamic()
  .bootstrapModule(IndexModule)
  .catch(console.error);