import React, {useEffect, useState} from 'react';
import {Badge, Button, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {getGenresUrl, getMoviePosterUrl} from '../../utility/apiUrls';
import ButtonsWishlist from '../Wishlist/ButtonsWishlist';

const SingleMovie = (props) => {
    const {movie, showDetailsBtn, setWishlistOfParent = null} = props;
    const [genres, setGenres] = useState([]);
    const history = useHistory();

    const handleMovieDetailsClick = (movie) => {
        history.push(`/movies/${movie.id}`);
    }

    const getGenreNameById = (arr, id) => {
        const found = arr.find(item => item.id === id);
        return found?.name;
    }

    useEffect(() => {
        fetch(getGenresUrl())
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))
    }, [])



    return (
        <div className="d-flex justify-content-center my-3">
            <Card style={{width: '15rem'}} className='m-2'>

                <Card.Img variant="top" src={getMoviePosterUrl(movie.poster_path)} className='' />
                <Card.Body>
                    <Card.Title className='text-center'>{movie.title}</Card.Title>
                    <hr />

                    <div>
                        {/* Release Date */}
                        <Card.Subtitle className='my-2'>Release Date: <span className=' fw-light' >{movie.release_date}</span></Card.Subtitle>
                        <hr />

                        {/* Genre */}
                        <Card.Subtitle className=''>Genre:
                            <span className=' fw-light' >
                                {
                                    movie?.genre_ids?.map((id) => {
                                        return (
                                            <span key={movie.id + id}>
                                                {' '}
                                                <Badge pill bg="secondary" className='my-1' > {getGenreNameById(genres, id)}</Badge>
                                                {' '}
                                            </span>
                                        )
                                    })
                                }
                            </span>
                        </Card.Subtitle>
                        <hr />

                        {/* Rating */}
                        <Card.Subtitle className='my-2'>Ratings: <span className=' fw-light' >{movie.vote_average}</span></Card.Subtitle>
                    </div>

                </Card.Body>

                {/* details button */}
                {
                    showDetailsBtn &&
                    <div className="d-grid gap-2 p-1">
                        <Button variant="outline-dark" onClick={() => handleMovieDetailsClick(movie)}>
                            Show Movie Details
                        </Button>
                    </div>
                }

                {/* wishlist button */}
                <ButtonsWishlist movie={movie} setWishlistOfParent={setWishlistOfParent} />
            </Card >
        </div>
    );
};

export default SingleMovie;