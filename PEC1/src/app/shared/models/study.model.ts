export interface Study {
    uid: number;
    type: TypeStudy;
    level: LevelStudy;
    name: string;
    university: string;
    finishDate: string;
}

export interface LevelStudy {
    uid: number;
    name: string;
}

export interface TypeStudy {
    uid: number;
    name: string;
}