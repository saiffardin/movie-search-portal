
import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import SingleMovie from '../SingleMovie/SingleMovie';

const ShowMovies = (props) => {

    const {divBg, sectionTitle, movies, genreId} = props;
    const history = useHistory();

    const handleViewAllClick = (divBg) => {
        // history.push(`/${category}/view-all`);

        // console.log('divBg:', divBg);
        // console.log('genreId:', genreId);
        history.divBg = divBg;
        // console.log('history:', history);
        history.push(`/genre/${genreId}`);

    }

    // console.log('props:', props)

    return (
        <div className={`${divBg} w-100 py-3`}>
            <div className="container">

                {/* Section Title */}
                <h1 className={`text-center ${divBg !== 'bgGrey' && 'text-white'}`}>{sectionTitle}</h1>

                {/* Cards - Movies */}
                <Row>
                    {movies.map((movie) => (
                        <Col className="d-flex justify-content-center" key={movie.id}>
                            <SingleMovie
                                movie={movie}
                                // genres={genres}
                                showDetailsBtn={true}
                            />
                        </Col>
                    ))}
                </Row>

                {/* view all button */}
                <div className=" text-center m-3">
                    <Button variant="danger" size="lg" onClick={() => handleViewAllClick(divBg)}>
                        View More {sectionTitle} Movies
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default ShowMovies;