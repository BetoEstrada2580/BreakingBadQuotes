import PropTypes from 'prop-types'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
    const { formState, onResetForm, onInputChange, description } = useForm({
        description: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        let newInputValue = description.trim();
        if (newInputValue.length <= 1) return;
        let newToDo = {
            id: new Date().getTime(),
            description: newInputValue,
            done: false
        }
        handleNewTodo(newToDo);
        onResetForm();
    }

    return (
        <form onSubmit={(e) => onSubmit(e)} aria-label="form" >
            <input type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button type="submit" className="btn btn-primary mt-2   ">
                Agregar
            </button>
        </form>
    )
}

TodoAdd.propTypes = {
    handleNewTodo: PropTypes.func.isRequired
}