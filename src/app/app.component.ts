import { Component, isDevMode } from '@angular/core';
import { environment as devEnv } from '../environments/environment';
import { environment as prodEnv } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static environment: any;

  constructor() {
    if (isDevMode()) {
      AppComponent.environment = devEnv;
    } else {
      AppComponent.environment = prodEnv;
    }
    console.log(AppComponent.environment)
  }
}
