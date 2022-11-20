/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {getGenresUrl, getMoviesByGenreUrl} from '../../utility/apiUrls';
import SingleMovie from '../SingleMovie/SingleMovie';

const MOVIE_NAME = 'Movie Name';
const RELEASE_YEAR = 'Release Year';
const RATINGS = 'Ratings';
const SORTING_OPTIONS = [MOVIE_NAME, RELEASE_YEAR, RATINGS];

const TopMoviesList = () => {
    const [allGenres, setAllGenres] = useState([]);

    const [singleGenre, setSingleGenre] = useState({});
    const {slug} = useParams();

    useEffect(() => {
        fetch(getGenresUrl())
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

        fetch(getMoviesByGenreUrl(slug))
            .then((data) => data.json())
            .then((res) => {
                setSingleGenre(prevState => ({
                    ...prevState,
                    movies: res.results.slice(0, 10)
                }));
            })
    }, [slug])

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
                            SORTING_OPTIONS?.map((option, indx) => <Dropdown.Item key={indx} eventKey={option}>{option}</Dropdown.Item>)
                        }
                    </DropdownButton>
                </div>

                <Row>
                    {singleGenre?.movies?.map((movie) => (
                        <Col className="d-flex justify-content-center" key={movie.id}>
                            <SingleMovie
                                movie={movie}
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