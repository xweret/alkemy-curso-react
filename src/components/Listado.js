import {useNavigate, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
function Listado(){
    let navigate = useNavigate();
    let token = localStorage.getItem('token')

    // Creo un setter y lo uso en el useState donde llamamos a la data de la api

    const [ moviesList, setMoviesList] = useState ([]);

    // llamamos a la api usando axios

    useEffect(() => {
        const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=5d30ae53093a09ddbdf7efb36fc4aabc&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate';
        axios.get(endpoint)
            .then(response => {
                const apiData = response.data
                setMoviesList(apiData.results);
            })
    }, [setMoviesList])

    console.log(moviesList)
    
    return (
        <>
        {!token && navigate('/')}
        <div className='row'>
            {
                moviesList.map((oneMovie, idx) => {
                    return (

                    <div className='col-3' key={idx}>
                <div className="card my-4">
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{oneMovie.title.substring(0, 60)+'...'}</h5>
                    <p className="card-text">{oneMovie.overview.substring(0, 150)+'...'}</p>
                    <Link to="/" className="btn btn-primary">View Detail</Link>
                </div>
        </div>
    </div>

            )
        })
    }

        
    
        </div>
    </>
    )
}


export default Listado