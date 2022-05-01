import {useEffect, useState} from 'react';
import './App.css';

function App() {
    /** data.results er 'keys' - 15
     * ['id', 'video', 'vote_average', 'overview', 'release_date', 'title', 'adult', 'backdrop_path', 'vote_count', 'genre_ids', 'poster_path', 'original_language', 'original_title', 'popularity', 'media_type']
     */

    const [data, setData] = useState([]);
    let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API}`;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.results))
    }, [])

    console.log(data)
    // data.map(movie => {
    //     console.log(Object.keys(movie))

    // })


    return (
        <div className="`">
            <h1>Kona SL</h1>

            <h3>Length:{data?.length}</h3>
            {


            }


        </div>
    );
}

export default App;
