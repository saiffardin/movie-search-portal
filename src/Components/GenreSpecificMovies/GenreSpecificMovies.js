/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import ShowFiveMovies from '../ShowEightMovies/ShowFiveMovies';

const GenreSpecificMovies = (props) => {

    const {genres} = props;

    const apiKey = process.env.REACT_APP_API;
    const stylesDivBg = ['bgBlue', 'bgGrey', 'bgGreenish'];

    const [genreWiseMovies, setGenreWiseMovies] = useState([]);


    useEffect(() => {

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
                                movies: res.results.slice(0, 5)
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