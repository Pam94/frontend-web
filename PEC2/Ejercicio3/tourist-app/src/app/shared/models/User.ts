import { UserType } from './UserType'

export class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  type: UserType;
  companyName?: string;
  companyDescription?: string;
  cif?: string;
  phone?: string;
  birthdate?: Date;
  nationality?: string;
  nif?: string;
  aboutMe?: string;

  constructor(name: string, surname: string, email: string, password: string, type: UserType) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.type = type;
  }
}

export function generateMockUser(): User {
  return {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: '',
    type: UserType.TOURIST,
  }
}
