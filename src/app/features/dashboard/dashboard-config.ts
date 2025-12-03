import { InjectionToken } from '@angular/core';

export interface DashboardConfig {
  apiUrl: string;
}

export const DASHBOARD_CONFIG = new InjectionToken<DashboardConfig>('DASHBOARD_CONFIG');
