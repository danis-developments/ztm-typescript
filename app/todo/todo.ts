import fs from "fs";

const todosPath = "todos.json";

type Todo = {
    id: number;
    task: string;
}

function getTodos(): Todo[] {
    if(!fs.existsSync(todosPath)){
        return [];
    }

    const data = fs.readFileSync(todosPath);
    return JSON.parse(data.toString()) as Todo[];
}

function listTodos(): void {
    const todos: Todo[] = getTodos();
    console.log("=============");
    console.log("| Todo List |");
    console.log("+-----------+");
    console.log("| id: task  |");
    console.log("=============");
    for (let i = 0; i < todos.length; i++){
        console.log(`${todos[i].id}: ${todos[i].task}`);
    }
}

function saveTodos(todos: Todo[]): void {
    fs.writeFileSync(todosPath, JSON.stringify(todos));
}

function removeTodo(id: number): void {
    const todos: Todo[] = getTodos();
    const index = todos.findIndex(function(todo){
        return todo.id === id;
    });
    if (index === -1) {
        console.log(`Could not find todo with id ${id}`);
        listTodos();
        return;
    }

    const removedTodo = todos.splice(index,1)[0];
    saveTodos(todos);
    console.log(`Removed todo ${removedTodo.id}: ${removedTodo.task}`);
} 

function addTodo(task: string): void {
    const todos: Todo[] = getTodos();
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    todos.push({ id, task });
    saveTodos(todos);
    console.log(`Added todo ${id}: ${task}`);
}

function cliInvalidNumOptionsMsg(subcommand: string, expected: number, numOptions: number): void {
    console.log(`Invalid number of options for subcommand '${subcommand}', expected ${expected}, got ${numOptions}`);
}

function cliHelpMsg(): void {
    console.log("todo add TASK      add todo");
    console.log("todo done ID       complete a todo");
    console.log("todo list          list todo");
    console.log("todo --help        show this list of commands");
}

function cliNoCommandMsg(): void{
    console.log(`no command passed to todo.ts. Please enter a command:\n`);
    cliHelpMsg();
}

function cli(): void {
    const subcommand = process.argv[2]
    const options = process.argv.slice(3);
    // console.log(process.argv);

    if (subcommand === undefined) {
        cliNoCommandMsg();
        return;
    }

    switch (subcommand) {
        case "--help":
            cliHelpMsg();
            break;
        case "done":
            if (options.length !== 1){
                cliInvalidNumOptionsMsg(subcommand, 1, options.length);
                break;
            }
            const id = parseInt(options[0]);
            if(isNaN(id)){
                console.log(`Option must be a task id number for subcommand 'done', '${options[0]}' is not a number`);
            }
            removeTodo(id);
            break;
        case "add":
            if (options.length !== 1) {
                cliInvalidNumOptionsMsg(subcommand, 1, options.length);
                break;
            } 
            addTodo(options[0]);
            break;
        case "list":
            if (options.length !== 0) {
                cliInvalidNumOptionsMsg(subcommand, 0, options.length);
                break;
            } 
            listTodos();
            break;
        default:
            console.log(`unknown subcommand '${subcommand}'`);
            cliHelpMsg();
    }
}

cli();