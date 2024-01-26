import { Component } from '@angular/core';
import { MENU, SOCIALS } from './app.data';
import { EPosition, NavigationService } from 'src/services/navigation.service';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  EPosition = EPosition;
  socials = SOCIALS;
  menu = MENU;

  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        if (
          (this.location.path() !== '' &&
            this.navigationPosition === EPosition.CENTER) ||
          (this.location.path() === '' &&
            this.navigationPosition === EPosition.TOP)
        ) {
          this.navigationService.changePosition();
        }
      }
    });
  }

  get navigationPosition() {
    return this.navigationService.position;
  }
}
