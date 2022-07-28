import { useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
function Detalle (){
    let navigate = useNavigate();
    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID')

    const [movie, setMovie] = useState(null);
    

    useEffect(() => { 
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=5d30ae53093a09ddbdf7efb36fc4aabc&language=en-US`
    axios.get(endPoint)
    .then((response) => {
        const movieData = response.data;
        setMovie(movieData)
    })
    .catch((error) => {
        console.log('Algo salio mal...xd');
    console.log(endPoint)
    })
    },[movieID])


    return (
    <>
        { !token && navigate("/")}
        { !movie && <p>carcargandocargandocargacarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandocarcargandocargandocargandocargandogandondocargandogando</p>}
        { movie && 
        <>
                <h2>Titulo: {movie.title} </h2>
            <div className="row">
                    <div className="col-4">
                    <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="..."
                />
                    </div>
                    <div className="col-8">
            
                        <h5>Reseña:</h5>
                        <p>{movie.overview}</p>
                        
                        <h5>Generos</h5>
                        <ul>
                            { movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>) }
                        </ul>

                        <h5>Fecha de extreno: {movie.release_date}</h5>
                    </div>
            </div>
        </>
        }
    </> 
    )
}

export default Detalle;

// https://api.themoviedb.org/3/movie/438148?api_key=5d30ae53093a09ddbdf7efb36fc4aabc&language=en-US
