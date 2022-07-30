import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import swAlert from '@sweetalert/with-react'; 

function Resultados (){
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword')

    // creo el setter con useState y dps llamo a la api usando axios con useEffect

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=5d30ae53093a09ddbdf7efb36fc4aabc&language=en=EN&page=1&query=${keyword}`;
        axios.get(endPoint).then (response => {
            const moviesArray = response.data.results;
            if (moviesArray.length === 0) {
                swAlert(<h4>No se encontraron resultados</h4>);
            }
            setMoviesResults(moviesArray);

        })
        .catch(error =>  console.log(error));

        
    }, [keyword]);

return (
    <>
        
        <h2> Buscaste: <em>{keyword}</em> </h2>
        {moviesResults.length === 0 && <h3>No hay resultados que mostrar</h3>}
    <div className="row">
        {
        moviesResults.map((oneMovie, idx) => {
            return (
                    <div className="col-4" key={idx}>
                    <div className="card my-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top"
                    alt="..."
                    />
                        <div className="card-body">
                        <h5 className="card-title">
                    {oneMovie.title.substring(0, 60) + "..."}
                  </h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 150) + "..."}
                  </p>
                            <Link to={`/Detalle?movieID=${oneMovie.id}`} className="btn btn-success">
                                View Detail
                            </Link> 
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





export default Resultados