import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage"

describe('Pruebas en <LoginPage/>', () => {
    const user = { id: 123, name: 'Beto', email: 'correo@correo.com' };
    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider >
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    })

    test('debe de llamar el setUser cuando se hace click en el button', () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{
                user: null,
                setUser: setUserMock
            }}
            >
                <LoginPage />
            </UserContext.Provider >
        );
        const boton = screen.getByRole('button');
        fireEvent.click(boton);
        expect(setUserMock).toHaveBeenCalledWith(user);
    })
})