import { LanguageName } from './language.model';

export interface Activities {
    [id: number]: Activity;
}

export interface Activity {
    uid: number;
    name: string;
    category: Category;
    subcategory: SubCategory;
    description: string;
    language: LanguageName;
    date: string;
    price: number;
    minCapacity: number;
    limitCapacity: number;
    state: string;
}

export interface Category {
    uid: number;
    name: string;
}

export interface SubCategory {
    uid: number;
    name: string;
}