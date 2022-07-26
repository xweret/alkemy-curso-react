import {useNavigate, Link} from 'react-router-dom';
import {useEffect} from 'react';

function Listado(){

    let navigate = useNavigate();
    

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === null) {
            navigate('/');
        }
        },[])
    return (
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
    )
}

export default Listado