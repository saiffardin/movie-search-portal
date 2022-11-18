import React, {useEffect, useState} from 'react';
import {Badge, Card} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
// import {Badge, Button, Card, Modal} from 'react-bootstrap';


const MOVIE_DETAILS_KEYS = [
    'poster_path',
    'title',
    'release_date',
    'genres',
    'original_language',
    'original_title',
    'overview',
    'popularity',
    'vote_average',
    'vote_count'
]

const MovieDetails = () => {

    const {slug} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API;

        const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${slug}?api_key=${apiKey}`;

        fetch(movieDetailsUrl)
            .then((data) => data.json())
            .then((res) => {
                console.clear();
                console.log('res - movie/movieId:', res)
                console.log('----------------')
                MOVIE_DETAILS_KEYS.map(option => {
                    console.log(option, '-', res[option])
                })
                console.log('----------------')

                setMovie(res)

            })
    }, [])

    return (

        <div className='m-1 m-md-2 my-lg-5 overflow-hidden'>
            <Card style={{width: '', border: 'none'}} className=''>
                <div className="row movie-details-wrapper">

                    <div className="col-md-6 left-side-details d-flex justify-content-center justify-content-md-end ">
                        <img alt="poster_img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='img-fluid' style={{'width': '400px'}} />
                    </div>


                    <div className='col-md-6 col-xl-4 right-side-details'>
                        <Card.Body className=''>
                            <Card.Title className='text-center' >{movie.title}</Card.Title>
                            <hr />

                            <div>
                                {/* release_date */}
                                <Card.Subtitle className='my-2'>Release Date:
                                    <span className=' fw-light' > {movie.release_date}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* genres */}
                                <Card.Subtitle className=''>Genre:
                                    <span className=' fw-light' >
                                        {
                                            movie.genres?.map((genre, indx) => {
                                                return (
                                                    <span key={indx}>
                                                        {' '}
                                                        <Badge className='mt-1' pill bg="secondary" > {genre.name}</Badge>
                                                        {' '}
                                                    </span>
                                                )
                                            })
                                        }
                                    </span>
                                </Card.Subtitle>
                                <hr />

                                {/* original_language */}
                                <Card.Subtitle className='my-2'>Original Language:
                                    <span className=' fw-light' > {movie.original_language}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* original_title */}
                                <Card.Subtitle className='my-2'>Original Title:
                                    <span className='fw-light' > {movie.original_title}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* Overview */}
                                <Card.Subtitle className='my-2'>Overview:
                                    <span className=' fw-light' > {movie.overview}</span>
                                </Card.Subtitle>
                                <hr className='' />

                                {/* popularity */}
                                <Card.Subtitle className='my-2'>Popularity:
                                    <span className=' fw-light' > {movie.popularity}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* Rating */}
                                <Card.Subtitle className='my-2'>Ratings:
                                    <span className=' fw-light' > {movie.vote_average}</span>
                                </Card.Subtitle>
                                <hr />

                                {/* vote_count */}
                                <Card.Subtitle className='my-2'>Vote Count:
                                    <span className=' fw-light' > {movie.vote_count}</span>
                                </Card.Subtitle>
                            </div>

                        </Card.Body>
                    </div>
                </div>


            </Card >
        </div>
    );
};

/*'
['poster_path',
'title',
'release_date',
'genre_ids',
'original_language',
'original_title',
'overview',
'popularity',
'vote_average',
'vote_count']

*/

export default MovieDetails;