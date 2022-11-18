import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import React from 'react';

import {Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';
import SingleMovie from '../SingleMovie/SingleMovie';


// import {useHistory, useParams} from 'react-router-dom';
// import {Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';

const MOVIE_NAME = 'Movie Name';
const RELEASE_YEAR = 'Release Year';
const RATINGS = 'Ratings';
const SORTING_OPTIONS = [MOVIE_NAME, RELEASE_YEAR, RATINGS];


const TopMoviesList = () => {
    const [allGenres, setAllGenres] = useState([]);

    const [singleGenre, setSingleGenre] = useState({});
    const {slug} = useParams();

    const apiKey = process.env.REACT_APP_API;

    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    useEffect(() => {
        fetch(genreUrl)
            .then((data) => data.json())
            .then((res) => {

                setAllGenres(res.genres);

                const thisGenre = res.genres.find(genre => genre.id.toString() === slug);

                setSingleGenre({
                    genreId: thisGenre.id,
                    genreName: thisGenre.name,
                    movies: []
                });

            })
    }, [])


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${slug}`)
            .then((data) => data.json())
            .then((res) => {
                setSingleGenre(prevState => ({
                    ...prevState,
                    movies: res.results.slice(0, 10)
                }));
            })
    }, [slug])

    // useEffect(() => {
    //     console.log('%c singleGenre:', 'color:red', singleGenre)
    //     console.log('-----------------------')

    // }, [singleGenre])


    const [filter, setFilter] = useState('Sort By : Default');

    const handleSelectFilter = (e) => {
        let sortedMovies = [...singleGenre.movies];
        setFilter(`Sort By : ${e}`);

        if (e === MOVIE_NAME) {
            sortedMovies = [...singleGenre.movies].sort((a, b) =>
                a.title > b.title ? 1 : -1,
            );
        }

        else if (e === RELEASE_YEAR) {
            sortedMovies = [...singleGenre.movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        }

        else if (e === RATINGS) {
            sortedMovies = [...singleGenre.movies].sort((a, b) => b.vote_average - a.vote_average);
        }

        setSingleGenre(prevState => ({
            ...prevState,
            movies: sortedMovies
        }))
    }

    return (
        <div className={`bgGenre w-100 py-3`}>
            <div className='container'>

                {/* Section Title */}
                <h1 className={`text-center `}>Top {singleGenre?.genreName} Movies</h1>

                <div className='d-flex justify-content-center'>
                    {/* Dropdown Filter */}
                    <DropdownButton
                        className='m-2'
                        title={filter}
                        variant='success'
                        onSelect={handleSelectFilter}
                        size="sm"
                    >
                        {
                            SORTING_OPTIONS.map((option, indx) => <Dropdown.Item key={indx} eventKey={option}>{option}</Dropdown.Item>)
                        }
                    </DropdownButton>
                </div>

                <Row>
                    {singleGenre?.movies?.map((movie) => (
                        <Col className="d-flex justify-content-center" key={movie.id}>
                            <SingleMovie
                                movie={movie}
                                // genres={allGenres}
                                showDetailsBtn={true}
                            />
                        </Col >
                    ))}
                </Row >

            </div>
        </div >
    );
};

export default TopMoviesList;