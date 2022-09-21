import { useEffect, useReducer, useState } from 'react'
import { todoReducer } from '../08-useReducer/';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = (initialForm = []) => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action);
    }

    const todosCount = () => {
        return todos.length;
    }

    const pendingTodosCount = () => {
        return todos.filter((todo) => !todo.done).length;
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    }
}
