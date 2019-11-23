class TodoService {
    private todos: Todo[];
    onTodoListChanged: Function;

    constructor() {
        this.todos = (JSON.parse(localStorage.getItem("todos"))
            || []).map(
                (newTodo: Todo) => new Todo(newTodo.getText(), newTodo.getComplete())
            );
    }

    getTodos() {
        return this.todos;
    }

    bindTodoListChanged(callback: Function) {
        this.onTodoListChanged = callback;
    }

    private commit(todos: Todo[]) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    addTodo(text: string) {
        this.todos.push(new Todo(text));
        this.commit(this.todos);
    }

    editTodo(id: string, updatedText: string) {
        this.todos = this.todos.map(todo =>
            todo.getId() === id
                ? new Todo(updatedText, todo.getComplete()
                )
                : todo
        );
        this.commit(this.todos);
    }

    deleteTodo(id: string) {
        this.todos = this.todos.filter((todo) => todo.getId() !== id);
        this.commit(this.todos);
    }
    toggleTodo(id: string) {
        this.todos = this.todos.map(todo =>
            todo.getId() === id ? new Todo(
                todo.getText(),
                !todo.getComplete()
            ) : todo
        );
        this.commit(this.todos);
    }
}