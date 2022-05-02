export const getGenreNameById = (arr, id) => {
    let found = arr.find(item => item.id === id);
    // console.log(found?.name);
    return found?.name;
}

/* ja ja baad dibo from showing movie details
    {
        "adult": false,
        "backdrop_path": "/9SISFlf6SEiIb7CMk8h0Gu3NYow.jpg",
        "id": 745881,
        "media_type": "movie"
        "video": false,
    }
*/


/*
{
    
    
}
*/


/*
In movie detail page you have to show 
    movie poster, 
    title, 
    genres, 
    overview, 
    production company name, 
    release date, 
    cast crew with 
        profile image 
        and name, 
    video trailer.
*/