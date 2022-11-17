/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext} from 'react';
import {CentralDataContext} from '../../App';
import ShowMovies from '../ShowMovies/ShowMovies';

const GenreSpecificMovies = (props) => {

    // const {genres, genreWiseMovies} = props;
    const {genres, genreWiseMovies, stylesDivBg} = useContext(CentralDataContext);


    // console.log('-------------------------------')
    // console.log('genres:', genres)
    console.log('genreWiseMovies:', genreWiseMovies)
    // console.log('stylesDivBg:', stylesDivBg)

    return (
        <div>
            {
                genreWiseMovies.map((singleGenre, indx) => (
                    <ShowMovies
                        key={indx}
                        divBg={stylesDivBg[indx % stylesDivBg.length]}
                        sectionTitle={singleGenre.genreName}
                        movies={singleGenre.movies.slice(0, 5)}
                        genreId={singleGenre.genreId}
                    />
                ))
            }
        </div>
    );
};

export default GenreSpecificMovies;