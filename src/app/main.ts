import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { WebModule } from './web/app.module';

//import { MobileModule } from './mobile/app.module';

platformBrowserDynamic().bootstrapModule(WebModule);
