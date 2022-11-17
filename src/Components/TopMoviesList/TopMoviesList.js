import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {CentralDataContext} from '../../App';

import {Col, Dropdown, DropdownButton, Row} from 'react-bootstrap';
import SingleMovie from '../SingleMovie/SingleMovie';



const TopMoviesList = () => {
    const [singleGenre, setSingleGenre] = useState({});
    const {divBg} = useHistory();
    const {slug} = useParams();

    const {genres, genreWiseMovies, stylesDivBg} = useContext(CentralDataContext);


    console.log('divBg:', divBg);
    console.log('slug:', slug);


    useEffect(() => {
        const result = genreWiseMovies.filter(genre => genre.genreId.toString() === slug);
        console.log('result:', result)
        setSingleGenre(result[0]);
        window.scrollTo(0, 0);

    }, [])

    useEffect(() => {

        console.log('%c singleGenre:', 'color:red', singleGenre)
        console.log('-----------------------')

    }, [singleGenre])


    const [filter, setFilter] = useState('Select Filter');

    const handleSelectFilter = (e) => {
        console.log('e:', e)
        // setFilter(e)
    }


    return (
        // <div>
        //     <h1>Top 10 Movies - {slug}</h1>
        // </div>
        <div className={`${divBg} w-100 py-3`}>
            <div className='container'>

                {/* Section Title */}
                <h1 className={`text-center ${divBg !== 'bgGrey' && 'text-white'}`}>All {singleGenre?.genreName}</h1>

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
                        <Dropdown.Item eventKey="Overview">Overview</Dropdown.Item>
                        <Dropdown.Item eventKey="Genre">Genre</Dropdown.Item>
                    </DropdownButton>

                    {/* Search */}
                    {/* <input
                        readOnly={filter === 'Select Filter' ? true : false}
                        className="search m-2"
                        placeholder="Search..."
                        onChange={handleInputChange}
                    /> */}
                </div>

                <Row>
                    {singleGenre?.movies?.map((movie) => (
                        <Col className="d-flex justify-content-center" key={movie.id}>
                            <SingleMovie
                                movie={movie}
                                genres={genres}
                                showDetailsBtn={true}
                            />
                        </Col >
                    ))}
                </Row >


            </div>
        </div >
    );
};

export default TopMoviesList;