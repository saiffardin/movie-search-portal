/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Badge, Card, Col, Row} from 'react-bootstrap';
import {getGenreNameById} from '../../utility/genre';

const ShowTenMovies = (props) => {

    const {genres, divBg, sectionTitle, movies} = props;

 
    return (
        <div className={`${divBg} w-100 py-3`}>
            <h1 className={`text-center ${divBg!=='top-rated' && 'text-white'}`}>{sectionTitle}</h1>


            <Row lg={5} >
                {movies.map((movie, index) => (
                    <Col className="d-flex justify-content-center">
                        <Card style={{width: '16rem'}} className='m-2'>

                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='posterImg' />
                            <Card.Body>
                                <Card.Title className='text-center'>{movie.title}</Card.Title>

                                <hr />

                                <Card.Text>

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
                                                            <Badge Badge pill bg="secondary" > {getGenreNameById(genres, id)}</Badge>
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

                                </Card.Text>


                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div >
    );
};

export default ShowTenMovies;