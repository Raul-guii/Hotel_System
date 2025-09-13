import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App, appProviders } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { hospedesRoutes } from './app/hospedes/hospedes-routing.module';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),       
    provideRouter(hospedesRoutes), 
    appProviders
  ]
});
