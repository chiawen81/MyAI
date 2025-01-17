import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideMarkdown(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration()]
};

// // EIP.Web 參考
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     {
//       provide: APP_INITIALIZER,
//       // useFactory: (permissionService: PermissionService) => () =>
//       //   permissionService.initPermissionData(),
//       useFactory: initializeAppFactory,
//       deps: [PermissionService],
//       multi: true,
//     },
//     provideAnimations(),
//     provideHttpClient(withInterceptorsFromDi())
//   ]
// };
