import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";

export const Layout = () => {
    const { counter, increment, decrement, reset } = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data, isLoading, hasError } = useFetch(url);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1> Layout BreakingBad Quotes</h1>
            <hr />
            <h3>Quote number: {counter}</h3>
            {
                isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />
            }
            <br />
            <button className="btn btn-primary mt-2"
                onClick={() => { increment() }}
                disabled={isLoading || counter == 102}
            >
                Next quote
            </button>
            <button className="btn btn-primary mt-2"
                onClick={() => { decrement() }}
                disabled={isLoading || counter === 1}
            >
                Previous quote
            </button>
            <button className="btn btn-primary mt-2"
                onClick={reset}
                disabled={isLoading || counter === 1}
            >
                Reset
            </button>

        </>
    )
}