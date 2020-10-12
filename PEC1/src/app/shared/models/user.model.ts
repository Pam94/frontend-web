import { Study } from './study.model';
import { Language } from './language.model';
import { Activity } from './activity.model';

export interface Users {
    [id: number]: User;
}

export interface User {
    name: string;
    surname: string;
    birthdate: string;
    phone: string;
    nationality: string;
    NIF: string;
    aboutMe: string;

    userType: UserType;
    email: string;
    username: string;
    password: string;

    studies: Study[];

    languages: Language[];

    activities: Activity[];
}

export interface UserType {
    uid: number;
    name: string;
}

export interface Company extends User {
    companyName: string;
    companyDescription: string;
    CIF: string;
}

export function createNewUser(user?: User): User {
    return {
        ...user
    }
}