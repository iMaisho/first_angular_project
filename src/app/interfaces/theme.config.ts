import { InjectionToken } from '@angular/core';

export interface ThemeConfig {
  primaryColor: string;
  fontSize: number;
}

export const THEME_CONFIG = new InjectionToken<ThemeConfig>('Theme Configuration');