class TodoView {
    private app: HTMLElement;
    private form: HTMLElement;
    private input: HTMLInputElement;
    private submitButton: HTMLButtonElement;
    private title: HTMLTitleElement;
    private todoList: HTMLUListElement;

    private temporaryTodoText: string;

    constructor() {
        this.app = this.getElement("#root");
        this.form = this.createElement("form");
        this.input = <HTMLInputElement>this.createElement("input");
        this.input.type = "text";
        this.input.placeholder = "Add todo";
        this.input.name = "todo";
        this.submitButton = <HTMLButtonElement>this.createElement("button");
        this.submitButton.textContent = "Submit";
        this.form.append(this.input, this.submitButton);
        this.title = <HTMLTitleElement>this.createElement("h1");
        this.title.textContent = "Todos";
        this.todoList = <HTMLUListElement>this.createElement("ul", "todo-list");
        this.app.append(this.title, this.form, this.todoList);
        this.temporaryTodoText = "";
        this.initLocalListeners();
    }

    private get todoText() {
        return this.input.value;
    }

    private resetInput() {
        this.input.value = "";
    }

    createElement(tag: string, className: string = "") {
        return new HTMLElement;
    }
    getElement(selector: string) {
        return new HTMLElement;
    }
    displayTodos(todos: Todo[]) {

    }
    private initLocalListeners() {

    }

    bindAddTodo(handler: Function) { }
    bindDeleteTodo(handler: Function) { }
    bindEditTodo(handler: Function) { }
    bindToggleTodo(handler: Function) { }
}