/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ShowMovies from '../ShowMovies/ShowMovies';

const GenreSpecificMovies = (props) => {

    const {genres, genreWiseMovies} = props;

    const stylesDivBg = ['bgBlue', 'bgGrey', 'bgGreenish'];

    // console.log('genreWiseMovies:', genreWiseMovies)

    return (
        <div>
            {
                genreWiseMovies.map((singleGenre, indx) => (
                    <ShowMovies
                        key={indx}
                        genres={genres}
                        divBg={stylesDivBg[indx % stylesDivBg.length]}
                        sectionTitle={singleGenre.genreName}
                        movies={singleGenre.movies.slice(0, 5)}
                    />
                ))
            }
        </div>
    );
};

export default GenreSpecificMovies;