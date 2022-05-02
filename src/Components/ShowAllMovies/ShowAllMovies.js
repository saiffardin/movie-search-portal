/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, Col, Row} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import {getGenreNameById} from '../../utility/genre';

const ShowAllMovies = (props) => {
    const {genres, divBg, sectionTitle, url} = props;

    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        fetch(url)
            .then((data) => data.json())
            .then((res) => {
                setMovies(res.results);
                setPageCount(res.total_pages);
            })
    }, [])

    // console.log('pageCount:', pageCount);

    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;
        console.log('currentPage:', currentPage);

        const res = await fetch(`${url}&page=${currentPage}`);
        const response = await res.json();
        setMovies(response.results);
        window.scrollTo(0, 0);
        // console.log('results:', response.results)
    }

    return (
        <div className={`${divBg} w-100 py-3`}>
            {/* Section Title */}
            <h1 className={`text-center ${divBg !== 'top-rated' && 'text-white'}`}>All {sectionTitle}</h1>

            {/* Cards - Movies */}
            <Row lg={5} >
                {movies.map((movie, index) => (
                    <Col className="d-flex justify-content-center" key={index}>
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


                            {/* details button */}
                            <div className="d-grid gap-2 p-1">
                                <Button variant="outline-success" size="lg">
                                    Show Movie Details
                                </Button>

                            </div>
                        </Card >
                    </Col >
                ))}
            </Row >

            {/* pagination */}
            <div div className='mt-4' >
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}

                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}

                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}

                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}

                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </div >

        </div >
    );
};

export default ShowAllMovies;