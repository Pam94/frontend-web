import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InmemoryFakeDbService implements InMemoryDbService {

  createDb() {
    const users = [
      {
        id: 1,
        name: 'Pamela',
        surname: 'Fernández Fernández',
        birthdate: '30/01/1994',
        phone: '569987454',
        nationality: 'ES',
        NIF: '455678952M',
        aboutMe: '',
        userType: 'turist',
        email: 'pamela@gmail.com',
        username: 'pampam',
        password: 'pam26940',

        studies: [
          {
            uid: 1,
            type: {
              uid: 2,
              name: 'Título Universitario'
            },
            level: {
              uid: 1,
              name: 'Grado'
            },
            name: 'Grado en Ingeniería Informática del Software',
            university: 'Universidad de Oviedo',
            finishDate: '30/07/2018'
          },
          {
            uid: 2,
            type: {
              uid: 2,
              name: 'Título Universitario',
            },
            level: {
              uid: 5,
              name: 'Máster'
            },
            name: 'Master de Desarrollo de Aplicaciones Web',
            university: 'Universidad UOC',
            finishDate: '11/10/2020'
          }
        ],

        languages: [
          {
            uid: 1,
            level: {
              uid: 4,
              name: 'B2'
            },
            name: {
              uid: 1,
              name: 'Inglés'
            },
            date: '10/10/2020'
          }
        ],

        activities: [
          {
            uid: 1,
            name: 'Submarinismo',
            category: 'Playa',
            description: 'Submarinismo',
            language: 'Español',
            date: '20/07/2021',
            price: 50,
            minCapacity: 2,
            limitCapacity: 5,
            state: 'Places available'
          }
        ]
      }
    ];

    const activities = [
      {
        uid: 1,
        name: 'Submarinismo',
        category: 'Playa',
        description: 'Submarinismo',
        language: 'Español',
        date: '20/07/2021',
        price: 50,
        minCapacity: 2,
        limitCapacity: 5,
        state: 'Places available'
      },
      {
        uid: 2,
        name: 'Ruta',
        category: 'Cultura y patrimonio',
        description: 'Excursión,',
        language: 'Francés',
        date: '20/07/2021',
        price: 50,
        minCapacity: 10,
        limitCapacity: 15,
        state: 'Complete'
      },
      {
        uid: 3,
        name: 'Cata de vinos',
        category: 'Enoturismo:',
        description: 'Bodega,',
        language: 'Alemán',
        date: '20/07/2021',
        price: 50,
        minCapacity: 15,
        limitCapacity: 20,
        state: 'Places available'
      }
    ];

    return { users, activities };
  }
}
