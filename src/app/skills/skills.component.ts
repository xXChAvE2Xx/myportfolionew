import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  images: any[] = [
    {
      url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
      name: 'PHP',
      size: 100,
      progress: '90%',
      barColor: 'bg-info',
    },
    {
      url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      name: 'JS',
      size: 95,
      progress: '80%',
      barColor: 'bg-warning',
    },
    {
      url: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
      name: 'Git',
      size: 110,
      progress: '60%',
      barColor: 'bg-danger',
    },
    {
      url: '../../assets/img/sql.png',
      name: 'SQLServer',
      size: 110,
      progress: '50%',
      barColor: 'bg-success',
    },
    {
      url: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/typescript-icon.svg',
      name: 'TypeScript',
      size: 100,
      progress: '10%',
      barColor: 'bg-info',
    },
    {
      url: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/spring-icon.svg',
      name: 'Spring Boot',
      size: 100,
      progress: '40%',
      barColor: 'bg-success',
    },
  ];
}
