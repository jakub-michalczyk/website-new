import { Component, OnInit } from '@angular/core';
import { MENU, SOCIALS } from './app.data';
import { EPosition, NavigationService } from 'src/services/navigation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  EPosition = EPosition;
  socials = SOCIALS;
  menu = MENU;

  constructor(
    private navigationService: NavigationService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.location.path() !== '') {
      this.updatePosition();
    }
  }

  get navigationPosition() {
    return this.navigationService.position;
  }

  updatePosition() {
    this.navigationService.changePosition();
  }
}
