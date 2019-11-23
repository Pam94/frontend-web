interface IPerson {
    name: string;
    surname: string;
    birthdate: Date;
}

class Person {
    name: string;
    surname: string;
    birthdate: Date;

    constructor(person?: IPerson) {
        this.name = person && person.name || "Dummy";
        this.surname = person && person.surname || "Dummy";
        this.birthdate = person && person.birthdate || new Date();
    }

    getName(): string {
        return this.name;
    }

    getSurname(): string {
        return this.surname;
    }

    setBirthdate(newBirthdate: Date) {
        this.birthdate = newBirthdate;
    }

    setName(newName: string) {
        this.name = newName;
    }

    setSurname(newSurname: string) {
        this.surname = newSurname;
    }

    toString() {
        return "";
    }
}