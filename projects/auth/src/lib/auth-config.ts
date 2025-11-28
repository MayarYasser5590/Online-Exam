import { InjectionToken } from '@angular/core';

export interface AuthLibConfig {
  apiUrl: string;
}

export const AUTH_LIB_CONFIG = new InjectionToken<AuthLibConfig>('AUTH_LIB_CONFIG');
