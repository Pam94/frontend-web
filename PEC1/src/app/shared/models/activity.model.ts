import { LanguageName } from './language.model';

export interface Activities {
    [id: number]: Activity;
}

export interface Activity {
    uid: number;
    name: string;
    category: Category;
    description: string;
    language: LanguageName;
    date: string;
    price: number;
    minCapacity: number;
    limitCapacity: number;
    state: string;
}

export interface CultureActivity extends Activity {
    subcategory: CultureSubCategory;
}

export interface TurismActivity extends Activity {
    subcategory: TurismSubCategory;
}

export interface BeachActivity extends Activity {
    subcategory: BeachSubCategory;
}

export interface Category {
    uid: number;
    name: string;
}

export interface CultureSubCategory {
    uid: number;
    name: string;
}

export interface TurismSubCategory {
    uid: number;
    name: string;
}

export interface BeachSubCategory {
    uid: number;
    name: string;
}