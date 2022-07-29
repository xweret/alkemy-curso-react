import { useEffect, useState } from 'react';
import axios from 'axios';

function Resultados (){
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword')

    // creo el setter con useState y dps llamo a la api usando axios con useEffect

    const [moviesResults, setMoviesResults] = useState([]);

    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/company?api_key=5d30ae53093a09ddbdf7efb36fc4aabc&language&page=1&query=${keyword}`
        axios.get(endPoint).then (response => {
            const moviesArray = response.data.results;
            setMoviesResults(moviesArray)
        })
        .catch(error =>  console.log(error))
    });

return (
    <>
        
        <h2> Buscaste: <em>{keyword}</em> </h2>
    <div className="row">
        {
        moviesResults.map((oneMovie,idx) => {
            return (
                    <div className="col-4" key={idx}>
                    <div className="card my-4">
                        <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top"
                        alt="..."
                        />

                        <div className="card-body">
                            <h2> no flaco no ando </h2>
                            <h5 className="card-title">lorem lo rem lorem</h5> 
                            {/* <p className="card-text">{oneMovie.overview}... </p> */}
                            {/* <Link to={`/Detalle?movieID=${oneMovie.id}`} className="btn btn-danger">
                                View Detail
                            </Link>  */}
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