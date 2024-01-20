import { Component } from '@angular/core';
import { ISocials } from 'src/global/interfaces';
import { MENU, SOCIALS } from './app.data';
import { EPosition, NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private navigationService: NavigationService) {}

  EPosition = EPosition;
  socials = SOCIALS;
  menu = MENU;

  get navigationPosition() {
    return this.navigationService.position;
  }

  updatePosition() {
    this.navigationService.changePosition();
  }
}
