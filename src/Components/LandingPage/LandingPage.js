/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {getGenresUrl, getMoviesByGenreUrl} from '../../utility/apiUrls';
import ShowMovies from '../ShowMovies/ShowMovies';

const LandingPage = () => {
    const [genres, setGenres] = useState([]);
    const [genreWiseMovies, setGenreWiseMovies] = useState([]);
    const stylesDivBg = ['bgBlue', 'bgGrey', 'bgGreenish'];

    useEffect(() => {
        fetch(getGenresUrl())
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))
    }, [])

    useEffect(() => {
        genres?.map((singleGenre) => {
            fetch(getMoviesByGenreUrl(singleGenre.id))
                .then((data) => data.json())
                .then((res) => {
                    setGenreWiseMovies((prevState => {
                        return [
                            ...prevState,
                            {
                                genreId: singleGenre.id,
                                genreName: singleGenre.name,
                                movies: res.results.slice(0, 10)
                            }
                        ]
                    }))
                })
        })

    }, [genres])

    return (
        <div>
            {
                genreWiseMovies?.map((singleGenre, indx) => (
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

export default LandingPage;