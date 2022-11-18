/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import ShowMovies from '../ShowMovies/ShowMovies';

const LandingPage = () => {
    const apiKey = process.env.REACT_APP_API;
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    const [genres, setGenres] = useState([]);
    const [genreWiseMovies, setGenreWiseMovies] = useState([]);
    const stylesDivBg = ['bgBlue', 'bgGrey', 'bgGreenish'];

    useEffect(() => {
        fetch(genreUrl)
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))
    }, [])

    useEffect(() => {

        // eslint-disable-next-line array-callback-return
        genres.map((singleGenre) => {
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${singleGenre.id}`;

            fetch(url)
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

export default LandingPage;