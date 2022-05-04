/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import SingleMovie from '../SingleMovie/SingleMovie';

const ShowEightMovies = (props) => {

    const {genres, divBg, sectionTitle, movies} = props;
    let history = useHistory();

    const handleViewAllClick = (category) => {
        history.push(`/${category}/view-all`);
    }

    return (
        <div className={`${divBg} w-100 py-3`}>

            <div className="container">

                {/* Section Title */}
                <h1 className={`text-center ${divBg !== 'top-rated' && 'text-white'}`}>{sectionTitle}</h1>

                {/* Cards - Movies */}
                <Row>
                    {movies.map((movie, index) => (
                        <Col className="d-flex justify-content-center" key={index}>
                            <SingleMovie
                                movie={movie}
                                genres={genres}
                                showDetails={false}
                            />
                        </Col>
                    ))}
                </Row>

                {/* view all button */}
                <div className=" text-center m-3">
                    <Button variant="danger" size="lg" onClick={() => handleViewAllClick(divBg)}>
                        View All {sectionTitle}
                    </Button>
                </div>

            </div>

        </div >
    );
};

export default ShowEightMovies;