class Todo {
    private id: string;
    private text: string;
    private complete: boolean;

    constructor(
        text: string,
        complete: boolean = false
    ) {
        this.id = '0000000000';
        this.text = text;
        this.complete = complete;
    }

    getId() {
        return this.id;
    }

    setId(newId: string) {
        this.id = newId;
    }

    getText(): string {
        return this.text;
    }

    setText(newText: string) {
        this.text = newText;
    }

    getComplete() {
        return this.complete;
    }

    taskComplete() {
        this.complete = true;
    }

    taskUncomplete() {
        this.complete = false;
    }

}