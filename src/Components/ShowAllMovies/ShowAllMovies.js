/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';
import {Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import {getAllGenreNameByIdArray} from '../../utility/genre';
import SingleMovie from '../SingleMovie/SingleMovie';

const ShowAllMovies = (props) => {
    const {genres, divBg, sectionTitle, url} = props;

    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [filter, setFilter] = useState('Select Filter');
    const [query, setQuery] = useState("");
    // const [searchResult, setSearchResult] = useState([]);

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

    const handleSelectFilter = (e) => {
        console.log(e);
        setFilter(e)
    }

    const handleInputChange = (e) => {
        // console.log(e.target.value.toLowerCase())
        setQuery(e.target.value.toLowerCase().trim());


    }

    return (
        <div className={`${divBg} w-100 py-3`}>
            {/* Section Title */}
            <h1 className={`text-center ${divBg !== 'top-rated' && 'text-white'}`}>All {sectionTitle}</h1>

            <div className='d-flex justify-content-center'>
                {/* Dropdown Filter */}
                <DropdownButton
                    className='m-2'
                    title={filter}
                    variant='success'
                    onSelect={handleSelectFilter}
                    size="sm"
                >
                    <Dropdown.Item eventKey="Movie Name">Movie Name</Dropdown.Item>
                    <Dropdown.Item eventKey="Release Year">Release Year</Dropdown.Item>
                    <Dropdown.Item eventKey="Genre">Genre</Dropdown.Item>
                </DropdownButton>


                {/* Search */}
                <input
                    readOnly={filter === 'Select Filter' ? true : false}
                    className="search m-2"
                    placeholder="Search..."
                    onChange={handleInputChange}
                />
            </div>

            {/* 
            .filter((item) =>
                    item.title.toLowerCase().includes(query)
                )
            */}

            {/* movie['release_date'].slice(0,4) === '2022' */}

            {/* movie['genre_ids'] === [28, 12, 10751] */}

            {/* Cards - Movies */}
            <Row lg={5} >
                {movies.filter((item) => {
                    if (filter === 'Movie Name')
                        return item.title.toLowerCase().includes(query)

                    else if (filter === 'Release Year')
                        return item.release_date.slice(0, 4).includes(query)

                    else if (filter === 'Genre') {
                        let genreNames = getAllGenreNameByIdArray(genres, item.genre_ids);
                        // console.log('query:', query);

                        // arr.map(item => item.includes('action')).includes(true)
                        // genreNames.map(item => item.includes(query)).includes(true)

                        return genreNames.map(item => item.includes(query)).includes(true)
                    }

                    else return true
                }).map((movie, index) => (
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