import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        // console.log(pRef.current.getBoundingClientRect());
        setBoxSize({
            width,
            height
        })
    }, [quote])

    return (
        <>
            <blockquote className="blockquote text-end" >
                <p className="mb-1" ref={pRef}>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            {/* <code>{JSON.stringify(boxSize)}</code> */}
        </>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
