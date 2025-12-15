import { ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AUTH_LIB_CONFIG } from '../../projects/auth/src/lib/auth-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    {
      provide: AUTH_LIB_CONFIG,
      useValue: {
        apiUrl: 'https://exam.elevateegy.com/api/v1/auth'
      }
    }

  ]
};
