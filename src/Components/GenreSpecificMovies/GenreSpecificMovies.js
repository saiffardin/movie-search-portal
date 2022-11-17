/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import ShowFiveMovies from '../ShowEightMovies/ShowFiveMovies';

const GenreSpecificMovies = (props) => {

    const {genres, genreWiseMovies} = props;

    const stylesDivBg = ['bgBlue', 'bgGrey', 'bgGreenish'];

    console.log('genreWiseMovies:', genreWiseMovies)

    return (
        <div>
            {
                genreWiseMovies.map((singleGenre, indx) => (
                    <ShowFiveMovies
                        key={indx}
                        genres={genres}
                        divBg={stylesDivBg[indx % stylesDivBg.length]}
                        sectionTitle={singleGenre.genreName}
                        movies={singleGenre.movies}
                    />
                ))
            }
        </div>
    );
};

export default GenreSpecificMovies;