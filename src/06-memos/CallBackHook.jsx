import { useCallback, useState } from "react";
import { useCounter } from "../hooks"
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10)

    // Memoriza funciones para no volver a dinujar el componente hijo(?)
    const incrementFather = useCallback(
        (value) => {
            setCounter((c) => c + value);
        },
        [],
    );

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather} />
        </>
    )
}