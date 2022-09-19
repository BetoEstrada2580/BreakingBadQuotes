import { useEffect, useState } from "react"
import { Message } from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'usuario',
        email: 'correo@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, [name]: value
        });
    };

    useEffect(() => {
        // console.log('useEffect called');
    }, []);

    useEffect(() => {
        // console.log('formstate Changed');
    }, [formState]);

    useEffect(() => {
        // console.log('email Changed');
    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {
                username == "usuario2" && <Message />
            }

            <input
                type="email"
                className="form-control mt-2"
                placeholder="correo@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

        </>
    )
}

export default SimpleForm