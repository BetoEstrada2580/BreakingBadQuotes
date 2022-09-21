const initialState = [{
    id: 1,
    todo: 'Recolectar la gema del Alma',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload];
            break;
        default:
            break;
    }
    return state;
}

let toDos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la gema del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

toDos = todoReducer(toDos, addTodoAction);

console.log({ state: toDos });