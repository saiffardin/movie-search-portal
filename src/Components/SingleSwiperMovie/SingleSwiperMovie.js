import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import ButtonsWishlist from '../Wishlist/ButtonsWishlist';

const SingleSwiperMovie = (props) => {
    const {movie, showDetailsBtn, setWishlistOfParent = null} = props;
    const history = useHistory();

    const handleMovieDetailsClick = (movie) => {
        history.push(`/movies/${movie.id}`);
    }

    return (
        <div className="my-5">
            <Card style={{width: '18rem'}} className='m-2 ms-md-4'>

                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='' />
                <Card.Body>
                    <Card.Title className='text-center'>{movie.title}</Card.Title>
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

                <ButtonsWishlist movie={movie} setWishlistOfParent={setWishlistOfParent} />
            </Card >
        </div>
    );
};

export default SingleSwiperMovie;