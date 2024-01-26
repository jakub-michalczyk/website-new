import { Component } from '@angular/core';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects = PROJECTS;
  loaded = false;

  loadMore() {
    this.loaded = true;
  }
}
