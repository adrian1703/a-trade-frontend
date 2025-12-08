import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {AppSimple} from './app-simple/app-simple';

bootstrapApplication(AppSimple, appConfig)
  .catch((err) => console.error(err));
