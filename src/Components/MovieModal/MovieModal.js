import React from 'react';
import {Badge, Button, Card, Modal} from 'react-bootstrap';
import {getGenreNameById} from '../../utility/genre';

const MovieModal = (props) => {

    const {show, handleClose, movie, genres} = props;

    return (
        <div>
            <Modal fullscreen={true} show={show} onHide={handleClose}>

                <Modal.Body className='d-flex align-items-center justify-content-center'>
                    <Card style={{width: '', border: 'none'}} className='d-flex align-items-center'>

                        <div className='d-flex justify-content-center modalCard'>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='modalImg ' style={{'width': '400px'}} />
                            <Card.Body className='m-2'>
                                <Card.Title >{movie.title}</Card.Title>
                                <hr />

                                <div>

                                    {/* Release Date */}
                                    <Card.Subtitle className='my-2'>Release Date:
                                        <span className=' fw-light' > {movie.release_date}</span>
                                    </Card.Subtitle>
                                    <hr />

                                    {/* Genre */}
                                    <Card.Subtitle className=''>Genre:
                                        <span className=' fw-light' >
                                            {
                                                movie.genre_ids.map((id) => {
                                                    return (
                                                        <span key={movie.id+id}>
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
                        </div>

                    </Card >
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" className='m-3 modalCloseBtn m-auto' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MovieModal;