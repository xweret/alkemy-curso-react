import {useNavigate, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
function Listado(){
    let navigate = useNavigate();
    let token = null;

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
        <div className='col-3'>
            <div className="card">
                <img className="card-img-top" src="..." alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Movie Tittle</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/" className="btn btn-primary">View Detail</Link>
            </div>
        </div>
    </div>
    
</div>
        </>
    )
}


export default Listado