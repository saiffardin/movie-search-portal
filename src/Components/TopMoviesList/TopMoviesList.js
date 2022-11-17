import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {CentralDataContext} from '../../App';

const TopMoviesList = () => {
    const [singleGenre, setSingleGenre] = useState({});

    const {divBg} = useHistory();

    const {slug} = useParams();


    const {genres, genreWiseMovies, stylesDivBg} = useContext(CentralDataContext);



    console.log('divBg:', divBg);
    console.log('slug:', slug);


    useEffect(() => {
        const result = genreWiseMovies.filter(singleGenre => singleGenre.genreId.toString() === slug);
        console.log('result:', result)
        setSingleGenre(result[0]);
    }, [])

    useEffect(() => {

        console.log('%c singleGenre:', 'color:red', singleGenre)
        console.log('-----------------------')

    }, [singleGenre])



    return (
        <div>
            <h1>Top 10 Movies - {slug}</h1>
        </div>
    );
};

export default TopMoviesList;