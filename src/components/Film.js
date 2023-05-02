import React from 'react';

const Film = ({film}) => {
    return (
        <>
        <ul>
            <li>
                <h4><a class="films" href={film.url}>{film.name}</a></h4>
            </li>
        </ul>
        </>
    )
}

export default Film;