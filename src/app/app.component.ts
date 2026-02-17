import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { IonApp, IonRouterOutlet, IonButton, IonNav  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonButton, IonNav],
})

export class AppComponent {
  constructor() {}
}