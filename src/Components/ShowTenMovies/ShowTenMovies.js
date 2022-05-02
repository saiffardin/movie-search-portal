/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Badge, Button, Card, Col, Row} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {getGenreNameById} from '../../utility/genre';

const ShowTenMovies = (props) => {

    const {genres, divBg, sectionTitle, movies} = props;
    let history = useHistory();

    const handleViewAllClick = (category) => {
        console.log('category:', category)
        history.push(`/${category}/view-all`);
        // window.location.reload();
        
    }

    return (
        <div className={`${divBg} w-100 py-3`}>
            {/* Section Title */}
            <h1 className={`text-center ${divBg !== 'top-rated' && 'text-white'}`}>{sectionTitle}</h1>

            {/* Cards - Movies */}
            <Row lg={5} >
                {movies.map((movie, index) => (
                    <Col className="d-flex justify-content-center" key={index}>
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
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* view all button */}
            <div className=" text-center m-3">
                <Button variant="danger" size="lg" onClick={() => handleViewAllClick(divBg)}>
                    View All {sectionTitle}
                </Button>

            </div>

        </div >
    );
};

export default ShowTenMovies;