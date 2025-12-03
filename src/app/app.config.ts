import { ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AUTH_LIB_CONFIG } from '../../projects/auth/src/lib/auth-config';
import { DASHBOARD_CONFIG } from './features/dashboard/dashboard-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]) , withFetch()),
    {
      provide: AUTH_LIB_CONFIG,
      useValue: {
        apiUrl: 'https://exam.elevateegy.com/api/v1/auth'
      }
    },
    {
  provide: DASHBOARD_CONFIG,
  useValue: {
    apiUrl: 'https://exam.elevateegy.com/api/v1'
  }
}


  ]
};
