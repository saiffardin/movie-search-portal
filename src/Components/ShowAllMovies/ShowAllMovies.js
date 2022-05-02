/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {Col, Dropdown, Row} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import SingleMovie from '../SingleMovie/SingleMovie';

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

            <div className='d-flex justify-content-center'>
                <Dropdown className='m-2'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Movie Name</Dropdown.Item>
                        <Dropdown.Item>Release Date</Dropdown.Item>
                        <Dropdown.Item>Genre</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <input
                    className="search m-2"
                    placeholder="Search..."
                />
            </div>

            {/* Cards - Movies */}
            <Row lg={5} >
                {movies.map((movie, index) => (
                    <Col className="d-flex justify-content-center" key={index}>

                        <SingleMovie
                            movie={movie}
                            genres={genres}
                            showDetails={true}
                        />

                    </Col >
                ))}
            </Row >

            {/* pagination */}
            <div className='mt-4' >
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