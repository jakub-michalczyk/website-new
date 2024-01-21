import { Component, OnInit } from '@angular/core';
import { COMPANIES } from './experience.data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  companies = COMPANIES;
  lines: number[] = [];

  constructor() {
    for (let i = 0; i < 36; i++) {
      this.lines.push(i);
    }
  }
}
