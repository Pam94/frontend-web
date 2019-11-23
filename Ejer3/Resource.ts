type Genre = "COACHING" | "ENTERTAINMENT" | "HOBBY" | "NONFICTION" | "OTHER" | "SCIFI" | "STEM";
type Language = "ENGLISH" | "SPANISH" | "CATALAN" | "FRENCH" | "GERMAN" | "ITALIAN" | "OTHER";

interface iResource {
    id: string;
    tittle: string;
    imageSrc: string;
    price: number;
    yearPublished: number;
    loanable: boolean;
    genre: Genre;
    location: string;
    language: Language[];
}

class Resource {

    private id: string;
    private tittle: string;
    private imageSrc: string;
    private price: number;
    private genre: Genre;
    private yearPublished: number;
    private loanable: boolean;
    private location: string;
    private language: Language[];

    private authors: Author[];

    constructor(resource?: iResource) {
        this.id = resource && resource.id || "0000000000";
        this.tittle = resource && resource.tittle || "Dummy";
        this.imageSrc = resource && resource.imageSrc || " ./";
        this.price = resource && resource.price || 0.0;
        this.yearPublished = resource && resource.yearPublished || 1900;
        this.genre = resource && resource.genre || null;
        this.loanable = resource && resource.loanable || true;
        this.location = resource && resource.location || "";
        this.language = resource && resource.language || null;
    }

    addAuthor(author: Author) {
        this.authors.push(author);
    }

    addCopy(location: string) { }

    addLanguage(language: Language) { }

    existsCopy(number: number): boolean {
        return false;
    }

    getAuthors(): Author[] {
        return this.authors;
    }

    getGenre(): Genre {
        return this.genre;
    }

    getId(): string {
        return this.id;
    }

    getImageSrc(): string {
        return this.imageSrc;
    }

    getLanguages(): Language[] {
        return this.language;
    }

    getNumCopies(): number {
        return 0;
    }

    getPrice(): number {
        return this.price;
    }

    getTittle(): string {
        return this.tittle;
    }

    getTotalCost(): number {
        return this.price;
    }

    getYearPublished(): number {
        return this.yearPublished;
    }

    isLoanable(): boolean {
        return this.loanable;
    }

}