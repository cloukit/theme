//our root app component
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteParams, RouteConfig, Router, LocationStrategy, HashLocationStrategy } from '@angular2/router';
import { enableProdMode } from '@angular/core';
import { AppModule }  from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
