import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
images: any[] = [
  { url: '../../assets/img/php.png', name: 'PHP', size: 200, progress: '80%', barColor: 'bg-info'},
  { url: '../../assets/img/js.png', name: 'JS', size: 95, progress: '75%', barColor: 'bg-warning' },
  { url: '../../assets/img/git.png', name: 'Git', size: 110, progress: '60%', barColor: 'bg-danger' },
  { url: '../../assets/img/sql.png', name: 'SQLServer', size: 110, progress: '50%', barColor: 'bg-success' },
]
}
