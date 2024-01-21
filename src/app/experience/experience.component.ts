import { ChangeDetectorRef, Component } from '@angular/core';
import { COMPANIES } from './experience.data';
import { EPosition, NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  companies = COMPANIES;
  lines: number[] = [];
  EPosition = EPosition;

  constructor() {
    for (let i = 0; i < 36; i++) {
      this.lines.push(i);
    }
  }
}
