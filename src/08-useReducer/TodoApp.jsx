import { useTodos } from "../hooks/useTodos";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodos();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small> </h1>
            <hr />
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <TodoList
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                        todos={todos} />
                </div>
                <div className="col-sm-12 col-md-6">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
