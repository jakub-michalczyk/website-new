import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export enum EPosition {
  TOP = 'top',
  CENTER = 'center',
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
  EPosition = EPosition;
  position = EPosition.CENTER;

  constructor(private router: Router) {}

  changePosition() {
    this.position === EPosition.CENTER
      ? (this.position = EPosition.TOP)
      : (this.position = EPosition.CENTER);

    if (this.position === EPosition.CENTER) {
      this.router.navigate(['/']);
    }
  }
}
