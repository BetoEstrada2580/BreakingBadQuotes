import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage"

describe('Pruebas en <HomePage/>', () => {
    const user = { id: 1, name: 'Beto' }

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider >
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    })

    test('debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider >
        );
        const preTag = screen.getByLabelText('pre');
        const preTagObject = JSON.parse(preTag.innerHTML);
        expect(preTagObject).toEqual(user);
        expect(preTagObject.id).toBe(user.id);
    })
})