import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el Todo pendiente de completar', () => {
        render(<TodoItem
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onDeleteTodoMock}
            {...todo}
        />);

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toContain('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-success text-decoration-line-through')
    })

    test('debe de mostrar el Todo completado', () => {
        todo.done = true;
        render(<TodoItem
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onDeleteTodoMock}
            {...todo}
        />);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-success text-decoration-line-through')
    })

    test('span debe de llamar a onToogletodo al dar click', () => {
        render(<TodoItem
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
            {...todo}
        />);
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalled()
    })

    test('span debe de llamar a onToogletodo al dar click', () => {
        render(<TodoItem
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
            {...todo}
        />);
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
})