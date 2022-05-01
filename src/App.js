/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
// import {Card, Col, Row} from 'react-bootstrap';
import './App.css';

function App() {
    /** data.results er 'keys' - 15
     * ['id', 'video', 'vote_average', 'overview', 'release_date', 'title', 'adult', 'backdrop_path', 'vote_count', 'genre_ids', 'poster_path', 'original_language', 'original_title', 'popularity', 'media_type']
     */

    const [data, setData] = useState([]);
    const [genres, setGenres] = useState([]);

    let trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API}`;
    let posterUrl = `https://image.tmdb.org/t/p/w500`;
    let genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API}&language=en-US`;

    useEffect(() => {
        fetch(trendingMoviesUrl)
            .then((data) => data.json())
            .then((res) => setData(res.results))

        fetch(genreUrl)
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))
    }, [])

    console.log(genres)
    console.log('----------------------------------')
    // data.map(movie => {
    //     console.log(Object.keys(movie))

    // })


    const getGenreNameById = (arr, id) => {
        let found = arr.find(item => item.id === id);
        console.log(found?.name);
    }

    getGenreNameById(genres, 28);


    return (
        <div className="`">
            <h1>Kona SL</h1>

            <h3>Length:{data?.length}</h3>

            {/* <Row xs={1} md={2} lg={5} className="g-4">
                {Array.from({length: 10}).map((_, idx) => (
                    <Col>
                        <Card style={{width: '15rem'}}>

                            <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/zmXaK4ajfTUOeb8K13uQ4fNfE8L.jpg" className='posterImg' />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>

                                <Card.Text>

                                    <Card.Subtitle className='my-2'>Release Date: <span className=' fw-light' >cxcx</span></Card.Subtitle>
                                    <Card.Subtitle className='my-2'>Genre:</Card.Subtitle>
                                    <Card.Subtitle className='my-2'>Ratings:</Card.Subtitle>

                                </Card.Text>


                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> */}

        </div>
    );
}




export default App;
