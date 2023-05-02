import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film key={film.id} film={film}/>
    })

    return (
        <div class="filmbox">
            <p>{filmNodes}</p>
            <hr></hr>
            <h3><a id="footer" href="https://www.imdb.com">View more films >></a></h3>
        </div>
    )
}

export default FilmList;