import { Component, OnInit } from '@angular/core';
import { TECH_STACK_DATA } from './techstack.data';

@Component({
  selector: 'app-techstack',
  templateUrl: './techstack.component.html',
})
export class TechStackComponent implements OnInit {
  data = TECH_STACK_DATA;

  ngOnInit(): void {
    console.log(this.data);
  }
}
