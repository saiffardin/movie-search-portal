/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Badge, Card} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {getMovieDetailsUrl, getMoviePosterUrl} from '../../utility/apiUrls';
import ButtonsWishlist from '../Wishlist/ButtonsWishlist';

const MovieDetails = () => {

    const {slug} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(getMovieDetailsUrl(slug))
            .then((data) => data.json())
            .then((res) => setMovie(res))
    }, [])

    return (

        <div className='m-1 m-md-2 my-lg-5 overflow-hidden'>
            <Card style={{width: '', border: 'none'}} className=''>
                <div className="row movie-details-wrapper">

                    <div className="col-md-6 left-side-details d-flex justify-content-center justify-content-md-end ">
                        {
                            movie.poster_path ? (<img alt="poster_img" src={getMoviePosterUrl(movie.poster_path)} className='img-fluid' style={{'width': '400px'}} />) : <span>Loading...</span>
                        }
                    </div>

                    <div className='col-md-6 col-xl-4 right-side-details'>
                        <Card.Body className=''>
                            {/* movie title */}
                            <Card.Title className='text-center' >{movie.title}</Card.Title>
                            <hr />

                            {/* rest of the stuff */}
                            <div>
                                {/* release_date */}
                                <Card.Subtitle className='my-2'>Release Date:
                                    <span className=' fw-light' > {movie.release_date}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* genres */}
                                <Card.Subtitle className=''>Genre:
                                    <span className=' fw-light' >
                                        {
                                            movie?.genres?.map((genre, indx) => {
                                                return (
                                                    <span key={indx}>
                                                        {' '}
                                                        <Badge className='mt-1' pill bg="secondary" > {genre.name}</Badge>
                                                        {' '}
                                                    </span>
                                                )
                                            })
                                        }
                                    </span>
                                </Card.Subtitle>
                                <hr />

                                {/* original_language */}
                                <Card.Subtitle className='my-2'>Original Language:
                                    <span className=' fw-light' > {movie.original_language}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* original_title */}
                                <Card.Subtitle className='my-2'>Original Title:
                                    <span className='fw-light' > {movie.original_title}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* Overview */}
                                <Card.Subtitle className='my-2'>Overview:
                                    <span className=' fw-light' > {movie.overview}</span>
                                </Card.Subtitle>
                                <hr className='' />

                                {/* popularity */}
                                <Card.Subtitle className='my-2'>Popularity:
                                    <span className=' fw-light' > {movie.popularity}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* Rating */}
                                <Card.Subtitle className='my-2'>Ratings:
                                    <span className=' fw-light' > {movie.vote_average}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* vote_count */}
                                <Card.Subtitle className='my-2'>Vote Count:
                                    <span className=' fw-light' > {movie.vote_count}</span>
                                </Card.Subtitle>
                            </div>

                        </Card.Body>


                        <ButtonsWishlist movie={movie} />

                    </div>
                </div>

            </Card >
        </div>
    );
};


export default MovieDetails;