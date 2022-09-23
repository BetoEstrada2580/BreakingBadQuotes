import { renderHook, act } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Purebas en useForm', () => {
    const initialForm = {
        name: 'Alberto',
        email: 'correo@correo.com'
    }
    test('debe de regresar la info por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange, onResetForm } = result.current;
        expect(result.current).toEqual(
            {
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any(Function),
                onResetForm: expect.any(Function)
            }
        );
    })

    test('debe de cambiar el nombre del formulario ', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange } = result.current;
        const newValue = 'Beto'
        const objeto = {
            target: {
                name: 'name',
                value: newValue
            }
        }
        act(() => {
            onInputChange(objeto)
        })
        console.log(result.current.name)
        expect(result.current.name).toEqual(newValue);
        expect(result.current.formState.name).toEqual(newValue);
    })

    test('debe de realizar el reset del formulario ', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange, onResetForm } = result.current;
        const newValue = 'Beto'
        const objeto = {
            target: {
                name: 'name',
                value: newValue
            }
        }
        act(() => {
            onInputChange(objeto)
            onResetForm()
        })
        console.log(result.current.name)
        expect(result.current.name).toEqual(initialForm.name);
        expect(result.current.formState.name).toEqual(initialForm.name);
    })


})