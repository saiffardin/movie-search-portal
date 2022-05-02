import React from 'react';
import {Badge, Button, Card} from 'react-bootstrap';
import {getGenreNameById} from '../../utility/genre';

const SingleMovie = (props) => {

    const {movie, genres, showDetails} = props;

    const handleMovieDetailsClick = (movie) => {
        console.log('movie:', movie);
    }

    return (
        <div className="d-flex justify-content-center">
            <Card style={{width: '16rem'}} className='m-2'>

                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='posterImg' />
                <Card.Body>
                    <Card.Title className='text-center'>{movie.title}</Card.Title>

                    <hr />

                    <div>

                        {/* Release Date */}

                        <Card.Subtitle className='my-2'>Release Date: <span className=' fw-light' >{movie.release_date}</span></Card.Subtitle>

                        <hr />

                        {/* -------------------------------- */}

                        {/* Genre */}

                        <Card.Subtitle className=''>Genre:
                            <span className=' fw-light' >
                                {
                                    movie.genre_ids.map((id, indx) => {
                                        return (
                                            <span key={indx}>
                                                {' '}
                                                <Badge pill bg="secondary" > {getGenreNameById(genres, id)}</Badge>
                                                {' '}
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </Card.Subtitle>

                        <hr />


                        {/* -------------------------------- */}

                        {/* Rating */}
                        <Card.Subtitle className='my-2'>Ratings: <span className=' fw-light' >{movie.vote_average}</span></Card.Subtitle>
                    </div>

                </Card.Body>


                {/* details button */}

                {
                    showDetails &&
                    <div className="d-grid gap-2 p-1">
                        <Button variant="outline-success" onClick={() => handleMovieDetailsClick(movie)}>
                            Show Movie Details
                        </Button>

                    </div>
                }

            </Card >
        </div>
    );
};

export default SingleMovie;