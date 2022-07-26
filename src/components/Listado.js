import {useNavigate, Link} from 'react-router-dom';
import {useEffect} from 'react';
import axios from 'axios';
function Listado(){
    let navigate = useNavigate();
    let token = null;

    // llamamos a la api usando axios

    useEffect(() => {
        const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=5d30ae53093a09ddbdf7efb36fc4aabc&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate';
        axios.get(endpoint)
            .then(response => {
                console.log(response);
            })
    }, [])
    
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