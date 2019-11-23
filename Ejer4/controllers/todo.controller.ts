class TodoController {
    private service: TodoService;
    private view: TodoView;

    constructor(service: TodoService, view: TodoView) {
        this.service = service;
        this.view = view;
        // Explicit this binding
        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
        // Display initial todos
        this.onTodoListChanged(this.service.getTodos());
    }
    onTodoListChanged = (todos: Todo[]) => {
        this.view.displayTodos(todos);
    };
    handleAddTodo = (todoText: string) => {
        this.service.addTodo(todoText);
    };

    handleEditTodo = (id: string, todoText: string) => {
        this.service.editTodo(id, todoText);
    };
    handleDeleteTodo = (id: string) => {
        this.service.deleteTodo(id);
    };
    handleToggleTodo = (id: string) => {
        this.service.toggleTodo(id);
    };
}