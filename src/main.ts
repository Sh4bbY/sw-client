import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as log from 'loglevel';

log.enableAll();

if (environment.production) {
  enableProdMode();
  log.disableAll();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => log.error(err));
