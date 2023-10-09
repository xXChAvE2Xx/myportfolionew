import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css'],
})
export class ProyectsComponent {
  proyects: any[] = [
    {
      name: 'Gallery_API',
      cardImg: './../../assets/img/gallery_api.png',
      desc: 'Perform an api that has the following requirements: Enable an endpoint to store an image with corresponding title and description, Enable an endpoint to get all stored images, Enable an endpoint to delete a specific image and Enable an endpoint to update title and description of an image.',
      url: 'https://github.com/xXChAvE2Xx/Gallery_API',
      contributors: 'Raúl Chávez',
      date: '18 de Enero del 2023',
      lenguage: 'TypeScript',
      classe: 'tag is-info',
      verEn: 'Github',
    },
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
      name: 'Certimax',
      cardImg: 'https://i.imgur.com/eOQsdED.png',
      desc: 'Página web que cuenta con un formulario para participantes de radioaficionados y creador de constancias de forma automática, el sistema también se encarga de enviar las constancias a los usuarios que contestaron el formulario. Este sitio fue hecho por petición del profesor Omar Álvarez Cárdenas.',
      url: 'https://github.com/xXChAvE2Xx/certimax',
      contributors: 'Raúl Chávez and Marcelo Ramírez',
      date: '8 de Enero del 2021',
      lenguage: 'PHP',
      classe: 'tag is-info',
      verEn: 'Github',
    }
  ];
}
