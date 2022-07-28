import swAlert from '@sweetalert/with-react'; 
import {useNavigate} from 'react-router-dom';

function Buscador() {

    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        if (keyword.length === 0 ) {
            swAlert(<h2> La busqueda no puede estar vacia</h2>);
        }

        else if (keyword.length < 4 ) {
            swAlert(<h2> La busqueda no puede ser tan corta</h2>);  
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/resultados?keyword=${keyword}`)
        }

    }

    return (
        <form className="d-flex align-items-center buscador" onSubmit={submitHandler}>
            <label className="form-label mb-0 mx-2" >
                <input className="form-control" type="text" name="keyword" placeholder="Busca tu pelicula"/>
            </label>
            
            <button className="btn btn-success">Buscar</button>
        </form>

    )
}
export default Buscador