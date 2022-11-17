import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import React from 'react';

import {Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';
import SingleMovie from '../SingleMovie/SingleMovie';


// import {useHistory, useParams} from 'react-router-dom';
// import {Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';





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

    useEffect(() => {
        console.log('%c singleGenre:', 'color:red', singleGenre)
        console.log('-----------------------')

    }, [singleGenre])


    const [filter, setFilter] = useState('Sort By : Default');

    const handleSelectFilter = (e) => {
        console.log('e:', e)
        setFilter(`Sort By : ${e}`)
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
                        <Dropdown.Item eventKey="Movie Name">Movie Name</Dropdown.Item>
                        <Dropdown.Item eventKey="Release Year">Release Year</Dropdown.Item>
                        <Dropdown.Item eventKey="Overview">Overview</Dropdown.Item>
                        <Dropdown.Item eventKey="Genre">Genre</Dropdown.Item>
                    </DropdownButton>

                </div>

                <Row>
                    {singleGenre?.movies?.map((movie) => (
                        <Col className="d-flex justify-content-center" key={movie.id}>
                            <SingleMovie
                                movie={movie}
                                genres={allGenres}
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