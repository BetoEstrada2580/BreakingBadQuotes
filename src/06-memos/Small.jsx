import { memo } from "react";

export const Small = memo(({ value }) => {
    console.log('Dibujado');

    return (
        <small>{value}</small>
    )
})
