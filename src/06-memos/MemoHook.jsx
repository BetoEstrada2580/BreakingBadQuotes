import { useMemo, useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...')
    }
    return `${iterationNumber} iteraciones`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    const MemorizedValue = useMemo(
        () => heavyStuff(counter), [counter])


    return (
        <>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
            <h4>{MemorizedValue}</h4>
            <button
                className="btn btn-primary"
                onClick={() => increment(1)}> +1</button>
            <button className="btn btn-outline-primary"
                onClick={() => setShow(!show)} >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
