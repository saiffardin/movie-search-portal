/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Badge, Card, Col, Row} from 'react-bootstrap';
import './App.css';

function App() {
    /** data.results er 'keys' - 15
     * ['id', 'video', 'vote_average', 'overview', 'release_date', 'title', 'adult', 'backdrop_path', 'vote_count', 'genre_ids', 'poster_path', 'original_language', 'original_title', 'popularity', 'media_type']
     */

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [genres, setGenres] = useState([]);

    let trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API}`;
    let posterUrl = `https://image.tmdb.org/t/p/w500`;
    let genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API}&language=en-US`;

    useEffect(() => {
        fetch(trendingMoviesUrl)
            .then((data) => data.json())
            .then((res) => setTrendingMovies(res.results.slice(0, 10)))

        fetch(genreUrl)
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))
    }, [])

    // console.log(genres)
    console.log(trendingMovies)
    console.log('----------------------------------')
    // data.map(movie => {
    //     console.log(Object.keys(movie))

    // })


    const getGenreNameById = (arr, id) => {
        let found = arr.find(item => item.id === id);
        console.log(found?.name);
        return found?.name;
    }

    getGenreNameById(genres, 28);


    return (
        <>
            <div className='trending'>
                <h1 className="text-center text-white">Trending Movies</h1>

                {/* <h3>Length:{trendingMovies?.length}</h3> */}



                <Row lg={5} className="">
                    {trendingMovies.map((movie, index) => (
                        <Col >
                            <Card style={{width: '16rem'}} className='m-2'>

                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='posterImg' />
                                <Card.Body>
                                    <Card.Title className='text-center'>{movie.title}</Card.Title>

                                    <hr />

                                    <Card.Text>

                                        <Card.Subtitle className='my-2'>Release Date: <span className=' fw-light' >{movie.release_date}</span></Card.Subtitle>
                                        <hr />

                                        {/* -------------------------------- */}

                                        <Card.Subtitle className=''>Genre:
                                            <span className=' fw-light' >
                                                {
                                                    movie.genre_ids.map((id, indx) => {
                                                        return (
                                                            <>
                                                                {/* "dark" */}
                                                                {' '}
                                                                <Badge Badge pill bg="secondary" > {getGenreNameById(genres, id)}</Badge>
                                                                {' '}
                                                            </>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </Card.Subtitle>

                                        <hr />


                                        {/* -------------------------------- */}

                                        <Card.Subtitle className='my-2'>Ratings: <span className=' fw-light' >{movie.vote_average}</span></Card.Subtitle>

                                    </Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div >
            {/* ---------------------- */}

            <div className='top-rated'>
                <h1 className="text-center ">Top Rated Movies</h1>

                {/* <h3>Length:{trendingMovies?.length}</h3> */}



                <Row lg={5} className="">
                    {trendingMovies.map((movie, index) => (
                        <Col >
                            <Card style={{width: '16rem'}} className='m-2'>

                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='posterImg' />
                                <Card.Body>
                                    <Card.Title className='text-center'>{movie.title}</Card.Title>

                                    <hr />

                                    <Card.Text>

                                        <Card.Subtitle className='my-2'>Release Date: <span className=' fw-light' >{movie.release_date}</span></Card.Subtitle>
                                        <hr />

                                        {/* -------------------------------- */}

                                        <Card.Subtitle className=''>Genre:
                                            <span className=' fw-light' >
                                                {
                                                    movie.genre_ids.map((id, indx) => {
                                                        return (
                                                            <>
                                                                {/* "dark" */}
                                                                {' '}
                                                                <Badge Badge pill bg="secondary" > {getGenreNameById(genres, id)}</Badge>
                                                                {' '}
                                                            </>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </Card.Subtitle>

                                        <hr />


                                        {/* -------------------------------- */}

                                        <Card.Subtitle className='my-2'>Ratings: <span className=' fw-light' >{movie.vote_average}</span></Card.Subtitle>

                                    </Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div >

            {/* ---------------------- */}

            <div className='upcoming'>
                <h1 className="text-center text-white">Upcoming Movies</h1>

                {/* <h3>Length:{trendingMovies?.length}</h3> */}



                <Row lg={5} className="">
                    {trendingMovies.map((movie, index) => (
                        <Col >
                            <Card style={{width: '16rem'}} className='m-2'>

                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='posterImg' />
                                <Card.Body>
                                    <Card.Title className='text-center'>{movie.title}</Card.Title>

                                    <hr />

                                    <Card.Text>

                                        <Card.Subtitle className='my-2'>Release Date: <span className=' fw-light' >{movie.release_date}</span></Card.Subtitle>
                                        <hr />

                                        {/* -------------------------------- */}

                                        <Card.Subtitle className=''>Genre:
                                            <span className=' fw-light' >
                                                {
                                                    movie.genre_ids.map((id, indx) => {
                                                        return (
                                                            <>
                                                                {/* "dark" */}
                                                                {' '}
                                                                <Badge Badge pill bg="secondary" > {getGenreNameById(genres, id)}</Badge>
                                                                {' '}
                                                            </>
                                                        )
                                                    })
                                                }
                                            </span>
                                        </Card.Subtitle>

                                        <hr />


                                        {/* -------------------------------- */}

                                        <Card.Subtitle className='my-2'>Ratings: <span className=' fw-light' >{movie.vote_average}</span></Card.Subtitle>

                                    </Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div >
        </>
    );
}




export default App;
