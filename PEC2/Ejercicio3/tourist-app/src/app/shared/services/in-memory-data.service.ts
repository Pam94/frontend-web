import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/User';
import { UserType } from '../models/UserType';

const users = [
  { id: 11, name: 'Josep', surname: 'Monjo', email: 'jvmonjo@gmail.com', password: '12345678', type: UserType.TOURIST },
  { id: 12, name: 'Jesus', surname: 'Sanchez', email: 'example@gmail.com', password: '12345678', type: UserType.TOURIST },
  { id: 13, name: 'Big', surname: 'Enterprise', email: 'admin@enterprise.com', password: '12345678', type: UserType.COMPANY  },
  { id: 14, name: 'Michel', surname: 'Lapart', email: 'admin@gmail.com', password: '12345678', type: UserType.COMPANY }
]

const activities = [
  {
    id: 1, name: 'Museu Picasso', category: 'Cultura i patrimoni', subcategory: 'Museu', price: 15, language: 'ES', minimumCapacity: 5, limitCapacity: 20, userId: 13, date: '25/10/2020'
  },
  {
    id: 2, name: 'Vins i més', category: 'Enoturisme', subcategory: 'Bodega', price: 15, language: 'CA', minimumCapacity: 5, limitCapacity: 20, userId: 14, date: '26/11/2020'
  }
]

const educations = [
  {
    id: 1, type:'Cicle formatiu', level: 'Grau mitjà', name: 'Fusta i moble', university: 'IES Borriana', userId: 11
  }
]

const languages = [
  {
    id: 1, level: 'C1', language: 'Anglès', userId: 11
  }
]

const my_activities_user = [
  {
    id: 1,
    activityId: 1,
    userId: 11
  },
  {
    id: 2,
    activityId: 2,
    userId: 13
  }
]

const favorites_user = [
  {
    id: 1,
    activityId: 2,
    userId: 11
  },
  {
    id: 2,
    activityId: 2,
    userId: 13
  }
]

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb()  {
    return { users, activities, educations, languages, my_activities_user, favorites_user }
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 14;
  }

}
