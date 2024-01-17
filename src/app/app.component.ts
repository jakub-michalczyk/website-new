import { Component } from '@angular/core';
import { ISocials } from 'src/global/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	menu: string[] = [
		'experience',
		'projects',	
		'contact'
	]
	socials: ISocials[] = [
		{
			link: 'https://github.com/jakub-michalczyk',
			name: 'github'
		},
		{
			link: 'www.linkedin.com/in/michalczyk-jakub',
			name: 'linkedin'
		},
		{
			link: 'mailto:kontakt.jakubmichalczyk@gmail.com',
			name: 'mail'
		}
	]
}
