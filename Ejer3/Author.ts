class Author extends Person {
    biography: string;
    private resources: Resource[];

    super(
        name: string,
        surname: string,
        birthdate: Date,
        biography: string
    ) {
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.biography = biography;
    }

    addResource(resource: Resource) {
        this.resources.push(resource);
    }

    getBiography(): string {
        return this.biography;
    }

    removeReource(resource: Resource) {
    }

    setBiography(biography: string) {

        this.biography = biography;
    }

    toString(): string {
        const tostring: string = "toString";
        return tostring;
    }
}