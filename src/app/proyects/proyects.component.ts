import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {

proyects: any[] = [
  {
    name: 'Raul Chavez - Portfolio',
    cardImg:
      'https://user-images.githubusercontent.com/54995852/169625260-1c3cea2d-c931-494b-8d76-eb1c64825057.png',
    desc: 'My first web application developed with Vue 3.',
    url: 'https://github.com/xXChAvE2Xx/myportfolio',
    contributors: 'Raúl Chávez',
    date: '20 de Mayo del 2022',
    lenguage: 'Vue',
    classe: 'tag is-primary',
    verEn: 'Github',
  },
  {
    name: 'Visual-Thinking-API',
    cardImg:
      'https://user-images.githubusercontent.com/54995852/167043222-64427a25-da21-4ed8-a5f5-561eb7a0015a.svg',
    desc: 'First API developed in the Launch X bootcamp.',
    url: 'https://github.com/xXChAvE2Xx/Visual-Thinking-API',
    contributors: 'Raúl Chávez',
    date: '4 de Mayo del 2022',
    lenguage: 'JavaScript',
    classe: 'tag is-warning',
    verEn: 'Github',
  },
  {
    name: 'Pokedex',
    cardImg: 'https://i.imgur.com/Vs1AUZw.png',
    desc: 'Web application to search by name or number any Pokémon, when searching the pokedex will show basic information of the Pokémon. I used PokeAPI for all the information. ',
    url: 'https://pokedex-rho-ashen.vercel.app/',
    contributors: 'Raúl Chávez',
    date: '22 de Marzo del 2022',
    lenguage: 'HTML, CSS & JavaScript',
    classe: 'tag is-primary',
    verEn: 'Web',
  },
  {
    name: 'Vaccination',
    cardImg: 'https://i.imgur.com/o5jTmBt.png',
    desc: 'Frontend practice of the bootcamp Launch X, the practice was to make a copy of a given UI design.',
    url: 'https://vaccination-covid19.vercel.app/',
    contributors: 'Raúl Chávez',
    date: '12 de Marzo del 2022',
    lenguage: 'HTML & CSS',
    classe: 'tag is-primary',
    verEn: 'Web',
  },
  {
    name: 'Certimax',
    cardImg: 'https://i.imgur.com/eOQsdED.png',
    desc: 'Página web que cuenta con un formulario para participantes de radioaficionados y creador de constancias de forma automática, el sistema también se encarga de enviar las constancias a los usuarios que contestaron el formulario. Este sitio fue hecho por petición del profesor Omar Álvarez Cárdenas.',
    url: 'https://github.com/xXChAvE2Xx/certimax',
    contributors: 'Raúl Chávez and Marcelo Ramírez',
    date: '8 de Enero del 2021',
    lenguage: 'PHP',
    classe: 'tag is-info',
    verEn: 'Github',
  },
  {
    name: 'Agromed',
    cardImg: 'https://i.imgur.com/Ag4pcq3.png',
    desc: 'School project, in which a PWA was to be created, we chose to create a web application to identify pest diseases through a small form.',
    url: 'https://github.com/xXChAvE2Xx/Agromed',
    contributors: 'Raúl Chávez, Gustavo Estudillo and Marcelo Ramírez',
    date: '27 de Diciembre del 2020',
    lenguage: 'PHP',
    classe: 'tag is-info',
    verEn: 'Github',
  },
]

}
