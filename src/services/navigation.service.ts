import { Injectable } from '@angular/core';

export enum EPosition {
  TOP = 'top',
  CENTER = 'center',
}

@Injectable({ providedIn: 'root' })
export class NavigationService {
  EPosition = EPosition;
  position = EPosition.CENTER;

  changePosition() {
    this.position === EPosition.CENTER
      ? (this.position = EPosition.TOP)
      : (this.position = EPosition.CENTER);
  }
}
